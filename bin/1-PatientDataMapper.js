class PatientDataMapper {
  static mapDataToTable(id, data) {
    const patientData = []
    patientData[PATIENTS_DATA_COLUMNS.patientId] = id
    patientData[PATIENTS_DATA_COLUMNS.name] = data.name
    patientData[PATIENTS_DATA_COLUMNS.middleName] = data.middleName
    patientData[PATIENTS_DATA_COLUMNS.familyName] = data.familyName
    patientData[PATIENTS_DATA_COLUMNS.phone] = data.phone
    patientData[PATIENTS_DATA_COLUMNS.egn] = data.egn
    patientData[PATIENTS_DATA_COLUMNS.city] = data.city
    patientData[PATIENTS_DATA_COLUMNS.street] = data.street
    patientData[PATIENTS_DATA_COLUMNS.occupation] = data.occupation
    patientData[PATIENTS_DATA_COLUMNS.email] = data.email
    patientData[PATIENTS_DATA_COLUMNS.hasAllergies] = data.hasAllergies
    patientData[PATIENTS_DATA_COLUMNS.isSmoker] = data.isSmoker
    return patientData
  }

  static mapDataToDTO(data) {
    return {
      'name': data[PATIENTS_DATA_COLUMNS.name],
      'middleName': data[PATIENTS_DATA_COLUMNS.middleName],
      'familyName': data[PATIENTS_DATA_COLUMNS.familyName],
      'phone': data[PATIENTS_DATA_COLUMNS.phone],
      'egn': data[PATIENTS_DATA_COLUMNS.egn],
      'city': data[PATIENTS_DATA_COLUMNS.city],
      'street': data[PATIENTS_DATA_COLUMNS.street],
      'occupation': data[PATIENTS_DATA_COLUMNS.occupation],
      'email': data[PATIENTS_DATA_COLUMNS.email],
      'hasAllergies': data[PATIENTS_DATA_COLUMNS.hasAllergies],
      'isSmoker': data[PATIENTS_DATA_COLUMNS.isSmoker],
    }
  }
}