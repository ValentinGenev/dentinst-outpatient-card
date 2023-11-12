class MedicalHistoryService {
  // TODO: every submissions should have version

  static edit(patientId: string, data: MedicalHistory) {
    MedicalHistoryRepository.edit(patientId, data)

    return patientId
  }
}
