interface PatientData {
  name: string,
  middleName?: string,
  familyName: string,
  phone?: string,
  egn: string,
  city?: string,
  street?: string,
  occupation?: string,
  email?: string,
  hasAllergies: string,
  isSmoker?: string
}

class PatientDataMapper {
  static mapDataToTable(id: string, data: PatientData) {
    const patientData = []
    patientData[PatientDataColumns.patientId] = id
    patientData[PatientDataColumns.name] = data.name
    patientData[PatientDataColumns.middleName] = data.middleName
    patientData[PatientDataColumns.familyName] = data.familyName
    patientData[PatientDataColumns.phone] = data.phone
    patientData[PatientDataColumns.egn] = data.egn
    patientData[PatientDataColumns.city] = data.city
    patientData[PatientDataColumns.street] = data.street
    patientData[PatientDataColumns.occupation] = data.occupation
    patientData[PatientDataColumns.email] = data.email
    patientData[PatientDataColumns.hasAllergies] = data.hasAllergies
    patientData[PatientDataColumns.isSmoker] = data.isSmoker
    return patientData
  }

  static mapDataToDTO(data: string[]): PatientData {
    return {
      'name': data[PatientDataColumns.name],
      'middleName': data[PatientDataColumns.middleName],
      'familyName': data[PatientDataColumns.familyName],
      'phone': data[PatientDataColumns.phone],
      'egn': data[PatientDataColumns.egn],
      'city': data[PatientDataColumns.city],
      'street': data[PatientDataColumns.street],
      'occupation': data[PatientDataColumns.occupation],
      'email': data[PatientDataColumns.email],
      'hasAllergies': data[PatientDataColumns.hasAllergies],
      'isSmoker': data[PatientDataColumns.isSmoker],
    }
  }
}
