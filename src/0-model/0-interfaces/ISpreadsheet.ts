/**
 * Wraps the GoogleAppsScript.Spreadsheet.Spreadsheet class
 * @property {GoogleAppsScript.Properties.Properties} properties
 * @property {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet
 * @method {GoogleAppsScript.Spreadsheet.Sheet} getSheet
 */
export interface ISpreadsheet {
  getSheet(sheetId: string): GoogleAppsScript.Spreadsheet.Sheet;
}
