import { Sheet } from "../0-database/Sheet"
import { MedicalHistory, MedicalHistoryMapper } from "../1-mappers/MedicalHistoryMapper"

export class MedicalHistoryRepository {
  private sheet: Sheet
  private mapper: MedicalHistoryMapper

  constructor(sheet: Sheet, mapper: MedicalHistoryMapper) {
    this.sheet = sheet
    this.mapper = mapper
  }

  getById(id: string) {
    return this.sheet.findRowsByValue(id)
  }

  edit(id: string, data: MedicalHistory) {
    const rowIndex = this.sheet.findRowIndexByUUID(id)
    const sheetData = this.mapper.mapDtoToSheetData(id, data)

    if (rowIndex === -1) {
      this.sheet.add(sheetData)
    }
    else {
      this.sheet.updateRow(rowIndex, sheetData)
    }
  }
}
