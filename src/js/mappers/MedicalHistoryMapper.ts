import { MedicalHistoryDTO } from "../interfaces/MedicalHistoryDTO"

export class MedicalHistoryMapper {
  static mapDataToTable(id: string, data: MedicalHistoryDTO) {
    const medicalHistory = []
    medicalHistory[MEDICAL_HISTORY_COLUMNS.patientId] = id
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasRegularMedicationIntake] = data.hasRegularMedicationIntake
    medicalHistory[MEDICAL_HISTORY_COLUMNS.regularMedications] = data.regularMedications
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasAllergies] = data.hasAllergies
    medicalHistory[MEDICAL_HISTORY_COLUMNS.allergies] = data.allergies
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasBronchialAsthma] = data.hasBronchialAsthma
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasAids] = data.hasAids
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasViralHepatitis] = data.hasViralHepatitis
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasHemophilia] = data.hasHemophilia
    medicalHistory[MEDICAL_HISTORY_COLUMNS.doesDrugs] = data.doesDrugs
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasLeukemia] = data.hasLeukemia
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasAbnormalBloodPressure] = data.hasAbnormalBloodPressure
    medicalHistory[MEDICAL_HISTORY_COLUMNS.regularBloodPressureMeasures] = data.regularBloodPressureMeasures
    medicalHistory[MEDICAL_HISTORY_COLUMNS.bloodPressureUntilIncident] = data.bloodPressureUntilIncident
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasCardiovascularSystemDiseases] = data.hasCardiovascularSystemDiseases
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasDiabetes] = data.hasDiabetes
    medicalHistory[MEDICAL_HISTORY_COLUMNS.hasJointDiseases] = data.hasJointDiseases
    medicalHistory[MEDICAL_HISTORY_COLUMNS.isPregnant] = data.isPregnant
    medicalHistory[MEDICAL_HISTORY_COLUMNS.otherDiseases] = data.otherDiseases
    return medicalHistory
  }

  static mapDataToDTO(data: any[]): MedicalHistoryDTO {
    return {
      hasRegularMedicationIntake: data[MEDICAL_HISTORY_COLUMNS.hasRegularMedicationIntake],
      regularMedications: data[MEDICAL_HISTORY_COLUMNS.regularMedications],
      hasAllergies: data[MEDICAL_HISTORY_COLUMNS.hasAllergies],
      allergies: data[MEDICAL_HISTORY_COLUMNS.allergies],
      hasBronchialAsthma: data[MEDICAL_HISTORY_COLUMNS.hasBronchialAsthma],
      hasAids: data[MEDICAL_HISTORY_COLUMNS.hasAids],
      hasViralHepatitis: data[MEDICAL_HISTORY_COLUMNS.hasViralHepatitis],
      hasHemophilia: data[MEDICAL_HISTORY_COLUMNS.hasHemophilia],
      doesDrugs: data[MEDICAL_HISTORY_COLUMNS.doesDrugs],
      hasLeukemia: data[MEDICAL_HISTORY_COLUMNS.hasLeukemia],
      hasAbnormalBloodPressure: data[MEDICAL_HISTORY_COLUMNS.hasAbnormalBloodPressure],
      regularBloodPressureMeasures: data[MEDICAL_HISTORY_COLUMNS.regularBloodPressureMeasures],
      bloodPressureUntilIncident: data[MEDICAL_HISTORY_COLUMNS.bloodPressureUntilIncident],
      hasCardiovascularSystemDiseases: data[MEDICAL_HISTORY_COLUMNS.hasCardiovascularSystemDiseases],
      hasDiabetes: data[MEDICAL_HISTORY_COLUMNS.hasDiabetes],
      hasJointDiseases: data[MEDICAL_HISTORY_COLUMNS.hasJointDiseases],
      isPregnant: data[MEDICAL_HISTORY_COLUMNS.isPregnant],
      hasOtherDiseases: data[MEDICAL_HISTORY_COLUMNS.hasOtherDiseases],
      otherDiseases: data[MEDICAL_HISTORY_COLUMNS.otherDiseases]
    }
  }
}
