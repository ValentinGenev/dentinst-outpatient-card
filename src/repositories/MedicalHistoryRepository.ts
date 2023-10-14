import { MedicalHistoryDTO } from "../interfaces/MedicalHistoryDTO"
import { MedicalHistoryMapper } from "../mappers/MedicalHistoryMapper"
import { findRowsByValue } from "../utilities/helpers"
import { MEDICAL_HISTORY_SHEET } from "../utilities/sheets"


export class MedicalHistoryRepository {
  static getById(id: string) {
    return findRowsByValue(MEDICAL_HISTORY_SHEET, id)
  }

  static add(id: string, data: MedicalHistoryDTO) {
    MEDICAL_HISTORY_SHEET.appendRow(MedicalHistoryMapper.mapDataToTable(id, data))
  }

  static edit(id: string, data: MedicalHistoryDTO) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.updateRow(rowIndex, MedicalHistoryMapper.mapDataToTable(id, data))
  }

  static updateRow(rowIndex: number, data: any[]) {
    const range = MEDICAL_HISTORY_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(patientId: string) {
    const values = MEDICAL_HISTORY_SHEET.getDataRange().getValues()

    for (let i = 0; i < values.length; i++) {
      if (values[i][PATIENTS_DATA_COLUMNS.patientId] === patientId) {
        return i
      }
    }

    return -1
  }
}
