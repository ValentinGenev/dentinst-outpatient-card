import { MedicalHistoryDTO } from "../interfaces/MedicalHistoryDTO"
import { MedicalHistoryRepository } from "../repositories/MedicalHistoryRepository"

export class MedicalHistoryService {
  static add(patientId: string, data: MedicalHistoryDTO) {
    MedicalHistoryRepository.add(patientId, data)

    return patientId
  }
}
