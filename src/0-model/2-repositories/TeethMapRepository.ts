import { Sheet } from "../0-database/Sheet";
import { Mapper } from "../1-mappers/IMapper";
import { Repository } from "./IRepository";

export class TeethMapRepository implements Repository {
    private sheet: Sheet;
    private mapper: Mapper;

    constructor(sheet: Sheet, mapper: Mapper) {
        this.sheet = sheet
        this.mapper = mapper
    }

    add(id: string, data: any) {  // TODO: define the TeethMap type and use it for the data
        this.sheet.add(this.mapper.mapDtoToSheetData(id, data))
    }

    edit(id: string, data: any) {  // TODO: define the TeethMap type and use it for the data
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