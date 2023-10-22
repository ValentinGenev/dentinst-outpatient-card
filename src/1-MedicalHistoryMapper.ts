interface MedicalHistory {
  hasRegularMedicationIntake: string
  regularMedications: string
  hasAllergies: string
  allergies: string
  hasBronchialAsthma: string
  hasAids: string
  hasViralHepatitis: string
  hasHemophilia: string
  doesDrugs: string
  hasLeukemia: string
  hasAbnormalBloodPressure: string
  regularBloodPressureMeasures: string
  bloodPressureUntilIncident: string
  hasCardiovascularSystemDiseases: string
  hasDiabetes: string
  hasJointDiseases: string
  isPregnant: string
  hasOtherDiseases: string
  otherDiseases: string
}

class MedicalHistoryMapper {
  static mapDtoToSheetData(id: string, data: MedicalHistory) {
    const medicalHistory = []
    medicalHistory[MedicalHistoryColumns.patientId] = id
    medicalHistory[MedicalHistoryColumns.hasRegularMedicationIntake] = data.hasRegularMedicationIntake
    medicalHistory[MedicalHistoryColumns.regularMedications] = data.regularMedications
    medicalHistory[MedicalHistoryColumns.hasAllergies] = data.hasAllergies
    medicalHistory[MedicalHistoryColumns.allergies] = data.allergies
    medicalHistory[MedicalHistoryColumns.hasBronchialAsthma] = data.hasBronchialAsthma
    medicalHistory[MedicalHistoryColumns.hasAids] = data.hasAids
    medicalHistory[MedicalHistoryColumns.hasViralHepatitis] = data.hasViralHepatitis
    medicalHistory[MedicalHistoryColumns.hasHemophilia] = data.hasHemophilia
    medicalHistory[MedicalHistoryColumns.doesDrugs] = data.doesDrugs
    medicalHistory[MedicalHistoryColumns.hasLeukemia] = data.hasLeukemia
    medicalHistory[MedicalHistoryColumns.hasAbnormalBloodPressure] = data.hasAbnormalBloodPressure
    medicalHistory[MedicalHistoryColumns.regularBloodPressureMeasures] = data.regularBloodPressureMeasures
    medicalHistory[MedicalHistoryColumns.bloodPressureUntilIncident] = data.bloodPressureUntilIncident
    medicalHistory[MedicalHistoryColumns.hasCardiovascularSystemDiseases] = data.hasCardiovascularSystemDiseases
    medicalHistory[MedicalHistoryColumns.hasDiabetes] = data.hasDiabetes
    medicalHistory[MedicalHistoryColumns.hasJointDiseases] = data.hasJointDiseases
    medicalHistory[MedicalHistoryColumns.isPregnant] = data.isPregnant
    medicalHistory[MedicalHistoryColumns.hasOtherDiseases] = data.hasOtherDiseases
    medicalHistory[MedicalHistoryColumns.otherDiseases] = data.otherDiseases
    return medicalHistory
  }

  static mapSheetDataToDto(data: any[]): MedicalHistory {
    return {
      hasRegularMedicationIntake: data[MedicalHistoryColumns.hasRegularMedicationIntake],
      regularMedications: data[MedicalHistoryColumns.regularMedications],
      hasAllergies: data[MedicalHistoryColumns.hasAllergies],
      allergies: data[MedicalHistoryColumns.allergies],
      hasBronchialAsthma: data[MedicalHistoryColumns.hasBronchialAsthma],
      hasAids: data[MedicalHistoryColumns.hasAids],
      hasViralHepatitis: data[MedicalHistoryColumns.hasViralHepatitis],
      hasHemophilia: data[MedicalHistoryColumns.hasHemophilia],
      doesDrugs: data[MedicalHistoryColumns.doesDrugs],
      hasLeukemia: data[MedicalHistoryColumns.hasLeukemia],
      hasAbnormalBloodPressure: data[MedicalHistoryColumns.hasAbnormalBloodPressure],
      regularBloodPressureMeasures: data[MedicalHistoryColumns.regularBloodPressureMeasures],
      bloodPressureUntilIncident: data[MedicalHistoryColumns.bloodPressureUntilIncident],
      hasCardiovascularSystemDiseases: data[MedicalHistoryColumns.hasCardiovascularSystemDiseases],
      hasDiabetes: data[MedicalHistoryColumns.hasDiabetes],
      hasJointDiseases: data[MedicalHistoryColumns.hasJointDiseases],
      isPregnant: data[MedicalHistoryColumns.isPregnant],
      hasOtherDiseases: data[MedicalHistoryColumns.hasOtherDiseases],
      otherDiseases: data[MedicalHistoryColumns.otherDiseases]
    }
  }
}
