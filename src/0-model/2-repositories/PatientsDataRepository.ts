import { Sheet } from "../0-interfaces/Sheet"
import { Mapper } from "../0-interfaces/Mapper"
import { PatientData } from "../1-mappers/PatientDataMapper"
import { Repository } from "../0-interfaces/Repository"

export class PatientsDataRepository implements Repository {
  private sheet: Sheet
  private mapper: Mapper

  constructor(sheet: Sheet, mapper: Mapper) {
    this.sheet = sheet
    this.mapper = mapper
  }

  add(id: string, data: PatientData) {
    this.sheet.add(this.mapper.mapDtoToSheetData(id, data))
  }

  edit(id: string, data: PatientData) {
    const rowIndex = this.sheet.findRowIndexByUUID(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.sheet.updateRow(rowIndex, this.mapper.mapDtoToSheetData(id, data))
  }

  getById(id: string) {
    return this.sheet.findRowsByValue(id)
  }
}
