import { Sheet } from "../google/Sheet"
import { PatientData } from "../mappers/PatientDataMapper"
import { Patient, PatientMapper } from "../mappers/PatientMapper"

export class PatientsRepository {
  private sheet: Sheet
  private mapper: PatientMapper

  constructor(sheet: Sheet, mapper: PatientMapper) {
    this.sheet = sheet
    this.mapper = mapper
  }

  getAll() {
    return this.sheet.findAllRows()
  }

  add(id: string, data: PatientData) {
    this.sheet.add(this.mapper.mapDataToTable(id, data))
  }

  edit(id: string, data: Patient) {
    const rowIndex = this.sheet.findRowIndexByUUID(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.sheet.updateRow(rowIndex, this.mapper.mapDataToTable(id, data))
  }
}
