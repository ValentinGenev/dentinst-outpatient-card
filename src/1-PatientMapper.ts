class PatientMapper {
  static mapDataToTable(id, data) {
    const patient = []
    patient[PATIENTS_COLUMNS.id] = id
    patient[PATIENTS_COLUMNS.name] = `${data.name} ${data.middleName} ${data.familyName}`
    return patient
  }
}