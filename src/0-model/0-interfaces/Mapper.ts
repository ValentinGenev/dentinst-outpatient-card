export interface Mapper {
    mapDtoToSheetData(id: string, data: any): any
    mapDataToDto?(data: string[]): any
}
