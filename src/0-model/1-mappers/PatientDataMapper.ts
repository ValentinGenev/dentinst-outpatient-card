import { Mapper as Mapper } from "../0-interfaces/Mapper"

enum PatientDataColumns {
  patientId = 0,
  name = 1,
  middleName = 2,
  familyName = 3,
  phone = 4,
  egn = 5,
  city = 6,
  street = 7,
  occupation = 8,
  email = 9,
  hasAllergies = 10,
  isSmoker = 11
}

export interface PatientData {
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

export class PatientDataMapper implements Mapper {
  mapDtoToSheetData(id: string, data: PatientData) {
    const patientData: any[] = []
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

  mapDataToDto(data: string[]): PatientData {
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
