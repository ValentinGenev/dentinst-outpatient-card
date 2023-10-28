// TODO: hash the data in transfer

function doGet() {
  const template = HtmlService.createTemplateFromFile('index')
  return HtmlService.createHtmlOutput(template.evaluate().getContent())
}

function addPatient(data: PatientData) {
  try {
    const patientId = PatientService.add(data)
    Logger.log(`Patient with id: ${patientId} added`)
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
  const patientRows = PatientsDataRepository.getById(id)
  Logger.log(`Patient with id: ${id} loaded`)
  return PatientDataMapper.mapDataToDTO(patientRows[0])
}

function editPatient(patientId: string, data: PatientData) {
  try {
    PatientService.edit(patientId, data)
    Logger.log(`Patient with id: ${patientId} edited`)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}

function editMedicalHistory(patientId: string, data: MedicalHistory) {
  try {
    MedicalHistoryService.edit(patientId, data)
    Logger.log(`Medical data for patent with id: ${patientId} edited`)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}

function getMedicalHistoryById(id: string) {
  try {
    const medicalHistoryRows = MedicalHistoryRepository.getById(id)
    Logger.log(`Medical data for patent with id: ${id} loaded`)
    return MedicalHistoryMapper.mapDataToDto(medicalHistoryRows[0])
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}
