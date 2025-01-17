import { Mapper } from "../0-interfaces/Mapper"

enum PatientColumns {
  name = 0,
  id = 1
}

export interface Patient {
  name: string,
  middleName?: string,
  familyName: string
}

export class PatientMapper implements Mapper {
  mapDtoToSheetData(id: string, data: Patient) {
    const patient: any[] = []
    patient[PatientColumns.id] = id
    patient[PatientColumns.name] = `${data.name} ${data.middleName} ${data.familyName}`
    return patient
  }
}
