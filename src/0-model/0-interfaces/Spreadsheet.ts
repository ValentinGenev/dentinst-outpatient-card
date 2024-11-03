/**
 * Wraps the GoogleAppsScript.Spreadsheet.Spreadsheet class
 * @property {GoogleAppsScript.Properties.Properties} properties
 * @property {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet
 * @method {GoogleAppsScript.Spreadsheet.Sheet} getSheet
 */
export interface Spreadsheet {
  getSheet(sheetId: string): GoogleAppsScript.Spreadsheet.Sheet;
}
