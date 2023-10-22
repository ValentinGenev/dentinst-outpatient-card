class MedicalHistoryService {
  static add(patientId, data) {
    MedicalHistoryRepository.add(patientId, data)

    return patientId
  }
}
