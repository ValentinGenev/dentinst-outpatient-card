import { MedicalHistory, MedicalHistoryMapper } from "../../0-model/1-mappers/MedicalHistoryMapper"
import { MedicalHistoryRepository } from "../../0-model/2-repositories/MedicalHistoryRepository"

export class MedicalHistoryService {
  // TODO: every submissions should have version

  private repository: MedicalHistoryRepository
  private mapper: MedicalHistoryMapper

  constructor(repository: MedicalHistoryRepository,
      mapper: MedicalHistoryMapper) {
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
