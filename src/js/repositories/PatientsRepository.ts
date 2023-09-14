import { PatientDataDTO } from "../interfaces/PatientDataDTO"
import { PatientMapper } from "../mappers/PatientMapper"
import { PATIENTS_SHEET } from "../utilities/sheets"

export class PatientsRepository {
  static getAll() {
    return PATIENTS_SHEET.getDataRange().getValues()
  }

  static add(id: string, data: PatientDataDTO) {
    PATIENTS_SHEET.appendRow(PatientMapper.mapDataToTable(id, data))
  }

  static edit(id: string, data: PatientDataDTO) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.updateRow(rowIndex, PatientMapper.mapDataToTable(id, data))
  }

  static updateRow(rowIndex: number, data: any[]) {
    const range = PATIENTS_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(patientId: string) {
    const values = PATIENTS_SHEET.getDataRange().getValues()

    for (let i = 0; i < values.length; i++) {
      if (values[i][PATIENTS_COLUMNS.id] === patientId) {
        return i
      }
    }

    return -1
  }
}
