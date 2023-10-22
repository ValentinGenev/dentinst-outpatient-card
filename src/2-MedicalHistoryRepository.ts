class MedicalHistoryRepository {
  static getById(id: string) {
    return findRowsByValue(MEDICAL_HISTORY_SHEET, id)
  }

  static add(id: string, data: MedicalHistory) {
    MEDICAL_HISTORY_SHEET.appendRow(MedicalHistoryMapper.mapDtoToSheetData(id, data))
  }

  static edit(id: string, data: MedicalHistory) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.updateRow(rowIndex, MedicalHistoryMapper.mapDtoToSheetData(id, data))
  }

  static updateRow(rowIndex: number, data: (string | boolean)[]) {
    const range = MEDICAL_HISTORY_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(patientId: string) {
    const values = MEDICAL_HISTORY_SHEET.getDataRange().getValues()

    for (let i = 0; i < values.length; i++) {
      if (values[i][PatientDataColumns.patientId] === patientId) {
        return i
      }
    }

    return -1
  }
}
