class MedicalHistoryRepository {
  static getById(id: string) {
    return findRowsByValue(MEDICAL_HISTORY_SHEET, id)
  }

  static edit(id: string, data: MedicalHistory) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      this.add(id, data)
    }

    this.updateRow(rowIndex, MedicalHistoryMapper.mapDtoToSheetData(id, data))
  }

  static updateRow(rowIndex: number, data: (string | boolean)[]) {
    const range = MEDICAL_HISTORY_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(id: string) {
    const values = MEDICAL_HISTORY_SHEET.getDataRange().getValues()

    for (let i = 0; i < values.length; i++) {
      if (values[i][MedicalHistoryColumns.patientId] === id) {
        return i
      }
    }

    return -1
  }

  private static add(id: string, data: MedicalHistory) {
    MEDICAL_HISTORY_SHEET.appendRow(MedicalHistoryMapper.mapDtoToSheetData(id, data))
  }
}
