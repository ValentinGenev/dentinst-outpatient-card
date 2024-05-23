import { Sheet } from "../0-database/Sheet"
import { Mapper } from "../1-mappers/IMapper"
import { MedicalHistory } from "../1-mappers/MedicalHistoryMapper"
import { Repository } from "./IRepository"

export class MedicalHistoryRepository implements Repository {
  private sheet: Sheet
  private mapper: Mapper

  constructor(sheet: Sheet, mapper: Mapper) {
    this.sheet = sheet
    this.mapper = mapper
  }
  
  add(id: string, data: MedicalHistory) {
    this.sheet.add(this.mapper.mapDtoToSheetData(id, data))
  }

  edit(id: string, data: MedicalHistory) {
    const rowIndex = this.sheet.findRowIndexByUUID(id)
    
    if (rowIndex === -1) {
      this.add(id, data)
    }
    else {
      const sheetData = this.mapper.mapDtoToSheetData(id, data)
      this.sheet.updateRow(rowIndex, sheetData)
    }
  }

  getById(id: string) {
    return this.sheet.findRowsByValue(id)
  }
}
