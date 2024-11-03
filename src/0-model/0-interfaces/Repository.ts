export interface Repository {
    add(id: string, data: any): void
    edit(id: string, data: any)
    getAll?(): any[][]
    getById?(id: string): any[]
}