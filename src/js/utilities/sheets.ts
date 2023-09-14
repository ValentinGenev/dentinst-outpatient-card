import { SpreadsheetApp } from '../interfaces/spreadsheetApp'


// @ts-ignore
const SPREADSHEET_APP: SpreadsheetApp = SpreadsheetApp
// @ts-ignore
const PROPERTIES_SERVICE = PropertiesService

const PROPERTIES = PROPERTIES_SERVICE.getScriptProperties()

export const PATIENTS_SHEET = SPREADSHEET_APP
  .openById(PROPERTIES.getProperty('SHEET_ID'))
  .getSheetByName(PROPERTIES.getProperty('PATIENTS_SHEET'))
export const PATIENTS_DATA_SHEET = SPREADSHEET_APP
  .openById(PROPERTIES.getProperty('SHEET_ID'))
  .getSheetByName(PROPERTIES.getProperty('PATIENTS_DATA_SHEET'))
export const MEDICAL_HISTORY_SHEET = SPREADSHEET_APP
  .openById(PROPERTIES.getProperty('SHEET_ID'))
  .getSheetByName(PROPERTIES.getProperty('MEDICAL_HISTORY_SHEET'))
export const VISITS_SHEET = SPREADSHEET_APP
  .openById(PROPERTIES.getProperty('SHEET_ID'))
  .getSheetByName(PROPERTIES.getProperty('VISITS_SHEET'))
