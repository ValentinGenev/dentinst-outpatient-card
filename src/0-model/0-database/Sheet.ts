import { Spreadsheet } from "./Spreadsheet"

/**
 * Sheet
 * Wraps the GoogleAppsScript.Spreadsheet.Sheet class
 * @property {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @method {void} add
 * @method {void} updateRow
 * @method {number} findRowIndexByUUID
 * @method {any[]} findRowsByValue
 */
export class Sheet {
  private sheet: GoogleAppsScript.Spreadsheet.Sheet

  constructor(spreadSheet: Spreadsheet, sheetName: string) {
    this.sheet = spreadSheet.getSheet(sheetName)
  }

  add(data: any[]) {
    this.sheet.appendRow(data)
  }

  updateRow(index: number, data: any[]) {
    this.sheet.getRange(index + 1, 1, 1, data.length) // ranges start from 1?
      .setValues([data])
  }

  findAllRows() {
    return this.sheet.getDataRange().getValues()
  }

  /**
   * The first column of the sheet must be the UUID
   * @param id
   * @returns the index of the row
   */
  findRowIndexByUUID(id: string) {
    const values = this.sheet.getDataRange().getValues()

    for (let i = 0; i < values.length; i++) {
      if (values[i][0] === id) {
        return i
      }
    }

    return -1
  }

  /**
   * @param value
   * @returns an array of rows that contain the value
   */
  findRowsByValue(value: any) {
    const textFinder = this.sheet.createTextFinder(value)
    const matches = textFinder.findAll()

    const matchingRows: any[] = [];
    for (let i = 0; i < matches.length; i++) {
      const row = matches[i].getRow()
      const range = this.sheet.getRange(row, 1, 1, this.sheet.getLastColumn())
      const values = range.getValues()

      matchingRows.push(values[0])
    }

    return matchingRows
  }
}
