// TODO: hash the data in transfer

function doGet() {
  const template = HtmlService.createTemplateFromFile('index')
  return HtmlService.createHtmlOutput(template.evaluate().getContent())
}

function addPatient(data: PatientData) {
  try {
    const patientId = PatientService.add(data)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error}
  }
}

function getAllPatients() {
  const patients = PatientsRepository.getAll()
  Logger.log(`${patients.length} patients loaded`)
  return patients
}

function getPatientById(id: string) {
  const patients = PatientsDataRepository.getById(id)
  Logger.log(`Patient with id: ${id} loaded`)
  return PatientDataMapper.mapDataToDTO(patients[0])
}

function editPatient(patientId: string, data: PatientData) {
  try {
    PatientService.edit(patientId, data)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}

function addMedicalHistory(patientId: string, data: MedicalHistory) {
  try {
    MedicalHistoryService.add(patientId, data)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}

function getMedicalHistory(id: string) {
  const medicalHistory = MedicalHistoryRepository.getById(id)
  Logger.log(`Medical data for patent with id: ${id} loaded`)
  return MedicalHistoryMapper.mapSheetDataToDto(medicalHistory)
}
