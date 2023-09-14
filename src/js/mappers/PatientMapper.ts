import { PatientDataDTO } from "../interfaces/PatientDataDTO"

export class PatientMapper {
  static mapDataToTable(id: string, data: PatientDataDTO) {
    const patient = []
    patient[PATIENTS_COLUMNS.id] = id
    patient[PATIENTS_COLUMNS.name] = `${data.name} ${data.middleName} ${data.familyName}`
    return patient
  }
}
