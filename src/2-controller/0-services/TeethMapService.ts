import { Mapper } from "../../0-model/1-mappers/IMapper"
import { Repository } from "../../0-model/2-repositories/IRepository"

export class TeethMapService {
    private repository: Repository
    private mapper: Mapper
  
    constructor(repository: Repository, mapper: Mapper) {
      this.repository = repository
      this.mapper = mapper
    }
  
    getById(id: string) {
      const medicalHistoryRows = this.repository.getById(id)
      return this.mapper.mapDataToDto(medicalHistoryRows[0])
    }
  
    edit(id: string, data: any) { // TODO: define the TeethMap type and use it for the data
      this.repository.edit(id, data)
      return id
    }
}