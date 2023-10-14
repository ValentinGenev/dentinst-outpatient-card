class MedicalHistoryRepository {
  static getById(id) {
    return findRowsByValue(MEDICAL_HISTORY_SHEET, id)
  }

  static add(id, data) {
    MEDICAL_HISTORY_SHEET.appendRow(MedicalHistoryMapper.mapDataToTable(id, data))
  }

  static edit(id, data) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.updateRow(rowIndex, MedicalHistoryMapper.mapDataToTable(id, data))
  }

  static updateRow(rowIndex, data) {
    const range = MEDICAL_HISTORY_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(patientId) {
    const values = MEDICAL_HISTORY_SHEET.getDataRange().getValues()
    
    for (let i = 0; i < values.length; i++) {
      if (values[i][PATIENTS_DATA_COLUMNS.patientId] === patientId) {
        return i
      }
    }

    return -1
  }
}