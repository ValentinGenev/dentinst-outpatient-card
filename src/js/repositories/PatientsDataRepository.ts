import { PatientDataDTO } from "../interfaces/PatientDataDTO"
import { PatientDataMapper } from "../mappers/PatientDataMapper"
import { findRowsByValue } from "../utilities/helpers"
import { PATIENTS_DATA_SHEET } from "../utilities/sheets"

export class PatientsDataRepository {
  static getById(id: string) {
    return findRowsByValue(PATIENTS_DATA_SHEET, id)
  }

  static add(id: string, data: PatientDataDTO) {
    PATIENTS_DATA_SHEET.appendRow(PatientDataMapper.mapDataToTable(id, data))
  }

  static edit(id: string, data: PatientDataDTO) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.updateRow(rowIndex, PatientDataMapper.mapDataToTable(id, data))
  }

  static updateRow(rowIndex: number, data: any[]) {
    const range = PATIENTS_DATA_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(patientId: string): number {
    const values = PATIENTS_DATA_SHEET.getDataRange().getValues()

    for (let i = 0; i < values.length; i++) {
      if (values[i][PATIENTS_DATA_COLUMNS.patientId] === patientId) {
        return i
      }
    }

    return -1
  }
}
