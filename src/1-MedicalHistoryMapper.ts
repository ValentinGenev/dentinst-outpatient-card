interface MedicalHistory {
  hasRegularMedicationIntake: string
  regularMedications: string
  hasAllergies: boolean
  allergies: string
  hasBronchialAsthma: boolean
  hasAids: boolean
  hasViralHepatitis: boolean
  hasHemophilia: boolean
  doesDrugs: boolean
  hasLeukemia: boolean
  hasAbnormalBloodPressure: boolean
  regularBloodPressureMeasures: string
  bloodPressureUntilIncident: string
  hasCardiovascularSystemDiseases: boolean
  hasDiabetes: boolean
  hasJointDiseases: boolean
  isPregnant: boolean
  hasOtherDiseases: boolean
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

  static mapSheetDataToDto(data: string[]): MedicalHistory {
    return {
      hasRegularMedicationIntake: data[MedicalHistoryColumns.hasRegularMedicationIntake],
      regularMedications: data[MedicalHistoryColumns.regularMedications],
      hasAllergies: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasAllergies]),
      allergies: data[MedicalHistoryColumns.allergies],
      hasBronchialAsthma: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasBronchialAsthma]),
      hasAids: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasAids]),
      hasViralHepatitis: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasViralHepatitis]),
      hasHemophilia: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasHemophilia]),
      doesDrugs: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.doesDrugs]),
      hasLeukemia: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasLeukemia]),
      hasAbnormalBloodPressure: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasAbnormalBloodPressure]),
      regularBloodPressureMeasures: data[MedicalHistoryColumns.regularBloodPressureMeasures],
      bloodPressureUntilIncident: data[MedicalHistoryColumns.bloodPressureUntilIncident],
      hasCardiovascularSystemDiseases: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasCardiovascularSystemDiseases]),
      hasDiabetes: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasDiabetes]),
      hasJointDiseases: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasJointDiseases]),
      isPregnant: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.isPregnant]),
      hasOtherDiseases: parseCheckboxValueToBoolean(data[MedicalHistoryColumns.hasOtherDiseases]),
      otherDiseases: data[MedicalHistoryColumns.otherDiseases]
    }
  }
}
