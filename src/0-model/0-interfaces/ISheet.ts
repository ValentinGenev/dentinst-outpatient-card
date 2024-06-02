export interface ISheet {
  add(data: any[]): void
  updateRow(index: number, data: any[]): void
  /**
   * The first column of the sheet must be the UUID
   * @param id
   * @returns the index of the row
   */
  findRowIndexByUUID(id: string): number
  findRowsByValue(value: any): any[]
  findAllRows(): any[]
}
