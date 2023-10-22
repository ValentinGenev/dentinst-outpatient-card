class PatientsRepository {
  static getAll() {
    return PATIENTS_SHEET.getDataRange().getValues()
  }

  static add(id: string, data: PatientData) {
    PATIENTS_SHEET.appendRow(PatientMapper.mapDataToTable(id, data))
  }

  static edit(id: string, data: Patient) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.updateRow(rowIndex, PatientMapper.mapDataToTable(id, data))
  }

  static updateRow(rowIndex: number, data: (string | boolean)[]) {
    const range = PATIENTS_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(patientId: string) {
    const values = PATIENTS_SHEET.getDataRange().getValues()

    for (let i = 0; i < values.length; i++) {
      if (values[i][PatientColumns.id] === patientId) {
        return i
      }
    }

    return -1
  }
}
