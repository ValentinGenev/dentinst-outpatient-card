const PATIENTS_COLUMNS = {
  name: 0,
  id: 1
}

const PATIENTS_DATA_COLUMNS = {
  patientId: 0,
  name: 1,
  middleName: 2,
  familyName: 3,
  phone: 4,
  egn: 5,
  city: 6,
  street: 7,
  occupation: 8,
  email: 9,
  hasAllergies: 10,
  isSmoker: 11
}

const MEDICAL_HISTORY_COLUMNS = {
  patientId: 0,
  hasRegularMedicationIntake: 1,
  regularMedications: 2,
  hasAllergies: 3,
  allergies: 4,
  hasBronchialAsthma: 5,
  hasAids: 6,
  hasViralHepatitis: 7,
  hasHemophilia: 8,
  doesDrugs: 9,
  hasLeukemia: 10,
  hasAbnormalBloodPressure: 11,
  regularBloodPressureMeasures: 12,
  bloodPressureUntilIncident: 13,
  hasCardiovascularSystemDiseases: 14,
  hasDiabetes: 15,
  hasJointDiseases: 16,
  isPregnant: 17,
  hasOtherDiseases: 18,
  otherDiseases: 19
}

const VISITS_COLUMNS = {
  patientId: 0,
  id: 1,
  date: 2
}