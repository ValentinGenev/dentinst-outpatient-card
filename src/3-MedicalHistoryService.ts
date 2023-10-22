class MedicalHistoryService {
  static add(patientId: string, data: MedicalHistory) {
    MedicalHistoryRepository.add(patientId, data)

    return patientId
  }
}
