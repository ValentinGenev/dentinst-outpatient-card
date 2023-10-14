export interface SpreadsheetApp {
  openById: (id: string) => Spreadsheet
}

interface Spreadsheet {
  getSheetByName: (name: string) => Sheet
}

export interface Sheet {
  appendRow: (rowContents: any[]) => Sheet,
  getDataRange: () => Range,
  getRange: (row: number, column: number, numRows: number, numColumns: number) => Range,
  getLastColumn: () => number,
  createTextFinder: (value: string) => TextFinder
}

interface TextFinder {
  findAll: () => Range[]
}

interface Range {
  setValues: (values: Array<any[]>) => Range,
  getRow: () => number,
  getValues: () => Array<any[]>
}
