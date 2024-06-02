import { IMapper } from "../0-interfaces/IMapper"
import { Repository } from "../0-interfaces/IRepository"

export class TeethMapService {
    private repository: Repository
    private mapper: IMapper

    constructor(repository: Repository, mapper: IMapper) {
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
