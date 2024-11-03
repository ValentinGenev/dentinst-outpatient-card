import { Mapper } from "../0-interfaces/Mapper"
import { MedicalHistory } from "../../0-model/1-mappers/MedicalHistoryMapper"
import { Repository } from "../0-interfaces/Repository"

export class MedicalHistoryService {
  // TODO: every submissions should have version

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

  edit(id: string, data: MedicalHistory) {
    this.repository.edit(id, data)
    return id
  }
}
