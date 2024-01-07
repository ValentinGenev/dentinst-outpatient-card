enum PatientColumns {
  name = 0,
  id = 1
}

export interface Patient {
  name: string,
  middleName?: string,
  familyName: string
}

export class PatientMapper {
  mapDataToTable(id: string, data: Patient) {
    const patient: any[] = []
    patient[PatientColumns.id] = id
    patient[PatientColumns.name] = `${data.name} ${data.middleName} ${data.familyName}`
    return patient
  }
}
