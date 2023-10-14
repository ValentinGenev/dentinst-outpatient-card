import { Sheet } from '../interfaces/spreadsheetApp'


// @ts-ignore
const HTML_SERVICE = HtmlService

export function loadTemplate(name: string) {
  return HTML_SERVICE.createHtmlOutputFromFile(name).getContent()
}

export function findRowsByValue(sheet: Sheet, value: string) {
  const textFinder = sheet.createTextFinder(value)
  const matches = textFinder.findAll()

  const matchingRows: any[] = [];
  for (let i = 0; i < matches.length; i++) {
    const row = matches[i].getRow()
    const range = sheet.getRange(row, 1, 1, sheet.getLastColumn())
    const values = range.getValues()

    matchingRows.push(values[0])
  }

  return matchingRows
}
