import { Sheet } from "../0-database/Sheet"
import { Mapper } from "../1-mappers/IMapper"
import { PatientData } from "../1-mappers/PatientDataMapper"

export class PatientsDataRepository {
  private sheet: Sheet
  private mapper: Mapper

  constructor(sheet: Sheet, mapper: Mapper) {
    this.sheet = sheet
    this.mapper = mapper
  }

  getById(id: string) {
    return this.sheet.findRowsByValue(id)
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
}
