export interface MedicalHistoryDTO {
  hasRegularMedicationIntake: boolean,
  regularMedications: string,
  hasAllergies: boolean,
  allergies: string,
  hasBronchialAsthma: boolean,
  hasAids: boolean,
  hasViralHepatitis: boolean,
  hasHemophilia: boolean,
  doesDrugs: boolean,
  hasLeukemia: boolean,
  hasAbnormalBloodPressure: boolean,
  regularBloodPressureMeasures: string,
  bloodPressureUntilIncident: string,
  hasCardiovascularSystemDiseases: boolean,
  hasDiabetes: boolean,
  hasJointDiseases: boolean,
  isPregnant: boolean,
  hasOtherDiseases: boolean,
  otherDiseases: string
}