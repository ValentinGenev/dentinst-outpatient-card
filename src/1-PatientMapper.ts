interface Patient {
  name: string,
  middleName: string,
  familyName: string
}

class PatientMapper {
  static mapDataToTable(id: string, data: Patient) {
    const patient = []
    patient[PatientColumns.id] = id
    patient[PatientColumns.name] = `${data.name} ${data.middleName} ${data.familyName}`
    return patient
  }
}
