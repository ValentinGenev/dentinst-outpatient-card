import { Sheet } from "./google/Sheet"
import { Spreadsheet } from "./google/SpreadSheet"
import { MedicalHistory, MedicalHistoryMapper } from "./mappers/MedicalHistoryMapper"
import { PatientData, PatientDataMapper } from "./mappers/PatientDataMapper"
import { PatientMapper } from "./mappers/PatientMapper"
import { MedicalHistoryRepository } from "./repositories/MedicalHistoryRepository"
import { PatientsDataRepository } from "./repositories/PatientsDataRepository"
import { PatientsRepository } from "./repositories/PatientsRepository"
import { MedicalHistoryService } from "./services/MedicalHistoryService"
import { PatientsService } from "./services/PatientsService"

// TODO: hash the data in transfer
// TODO: add bootstrap classes

/**
 * Google Apps Script entry point
 * @returns {GoogleAppsScript.HTML.HtmlOutput}
 */
function doGet() {
  const template = HtmlService.createTemplateFromFile('index')
  return HtmlService.createHtmlOutput(template.evaluate().getContent())
}

const spreadsheet = new Spreadsheet('SHEET_ID')

const patientDataSheet = new Sheet(spreadsheet, 'PATIENTS_DATA_SHEET')
const patientDataMapper = new PatientDataMapper()
const patientsDataRepository = new PatientsDataRepository(patientDataSheet, patientDataMapper)
const patientsSheet = new Sheet(spreadsheet, 'PATIENTS_SHEET')
const patientMapper = new PatientMapper()
const patientsRepository = new PatientsRepository(patientsSheet, patientMapper)
const patientService = new PatientsService(patientsRepository, patientsDataRepository)

function addPatient(data: PatientData) {
  try {
    const patientId = patientService.add(data)
    Logger.log(`Patient with id: ${patientId} added`)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error}
  }
}

function getAllPatients() {
  const patients = patientsRepository.getAll()
  Logger.log(`${patients.length} patients loaded`)
  return patients
}

function getPatientById(id: string) {
  const patientRows = patientsDataRepository.getById(id)
  Logger.log(`Patient with id: ${id} loaded`)
  return patientDataMapper.mapDataToDTO(patientRows[0])
}

function editPatient(patientId: string, data: PatientData) {
  try {
    patientService.edit(patientId, data)
    Logger.log(`Patient with id: ${patientId} edited`)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}

const medicalHistorySheet = new Sheet(spreadsheet, 'MEDICAL_HISTORY_SHEET')
const medicalHistoryMapper = new MedicalHistoryMapper()
const medicalHistoryRepository = new MedicalHistoryRepository(medicalHistorySheet, medicalHistoryMapper)
const MEDICAL_HISTORY_SERVICE = new MedicalHistoryService(medicalHistoryRepository, medicalHistoryMapper)

function editMedicalHistory(patientId: string, data: MedicalHistory) {
  try {
    MEDICAL_HISTORY_SERVICE.edit(patientId, data)
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
    Logger.log(`Medical data for patent with id: ${id} loaded`)
    return MEDICAL_HISTORY_SERVICE.getById(id)
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}
