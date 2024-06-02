export interface IMapper {
    mapDtoToSheetData(id: string, data: any): any
    mapDataToDto?(data: string[]): any
}
