import { ISheet } from "../0-interfaces/ISheet"
import { IMapper } from "../0-interfaces/IMapper"
import { PatientData } from "../1-mappers/PatientDataMapper"
import { Patient } from "../1-mappers/PatientMapper"
import { Repository } from "../0-interfaces/IRepository"

export class PatientsRepository implements Repository {
  private sheet: ISheet
  private mapper: IMapper

  constructor(sheet: ISheet, mapper: IMapper) {
    this.sheet = sheet
    this.mapper = mapper
  }

  add(id: string, data: PatientData) {
    this.sheet.add(this.mapper.mapDtoToSheetData(id, data))
  }

  edit(id: string, data: Patient) {
    const rowIndex = this.sheet.findRowIndexByUUID(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.sheet.updateRow(rowIndex, this.mapper.mapDtoToSheetData(id, data))
  }

  getAll() {
    return this.sheet.findAllRows()
  }
}
