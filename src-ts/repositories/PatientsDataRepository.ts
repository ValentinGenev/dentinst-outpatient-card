import { Sheet } from "../google/Sheet"
import { PatientData, PatientDataMapper } from "../mappers/PatientDataMapper"

export class PatientsDataRepository {
  private sheet: Sheet
  private mapper: PatientDataMapper

  constructor(sheet: Sheet, mapper: PatientDataMapper) {
    this.sheet = sheet
    this.mapper = mapper
  }

  getById(id: string) {
    return this.sheet.findRowsByValue(id)
  }

  add(id: string, data: PatientData) {
    this.sheet.add(this.mapper.mapDataToTable(id, data))
  }

  edit(id: string, data: PatientData) {
    const rowIndex = this.sheet.findRowIndexByUUID(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.sheet.updateRow(rowIndex, this.mapper.mapDataToTable(id, data))
  }
}
