// TODO: hash the data in transfer

import { Spreadsheet } from "./Spreadsheet"
import { MedicalHistory } from "../0-model/1-mappers/MedicalHistoryMapper"
import { PatientData } from "../0-model/1-mappers/PatientDataMapper"
import { Bootstrap } from "./Bootstrap"

const bootstrap = new Bootstrap(new Spreadsheet('SHEET_ID'))
const patientsService = bootstrap.bootstrapPatientsService()
const medicalHistoryService = bootstrap.bootstrapMedicalHistoryService()

/**
 * Google Apps Script entry point
 * @returns the html template
 */
function doGet() {
  const template = HtmlService.createTemplateFromFile('index')
  return HtmlService.createHtmlOutput(template.evaluate().getContent())
}

function addPatient(data: PatientData) {
  try {
    const patientId = patientsService.add(data)
    Logger.log(`Patient with id: ${patientId} added`)
    return { success: true, patientId }
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error}
  }
}

function getAllPatients() {
  const patients = patientsService.getAll()
  Logger.log(`${patients.length} patients loaded`)
  return patients
}

function getPatientById(id: string) {
  Logger.log(`Patient with id: ${id} loaded`)
  return patientsService.getDataById(id)
}

function editPatient(patientId: string, data: PatientData) {
  try {
    patientsService.edit(patientId, data)
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
    medicalHistoryService.edit(patientId, data)
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
    return medicalHistoryService.getById(id)
  }
  catch(error) {
    Logger.log(error)
    return { success: false, error }
  }
}
