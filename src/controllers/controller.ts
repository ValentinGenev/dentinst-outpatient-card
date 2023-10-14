// TODO: hash the data in transfer

import { MedicalHistoryDTO } from "../interfaces/MedicalHistoryDTO"
import { PatientDataDTO } from "../interfaces/PatientDataDTO"
import { MedicalHistoryMapper } from "../mappers/MedicalHistoryMapper"
import { PatientDataMapper } from "../mappers/PatientDataMapper"
import { MedicalHistoryRepository } from "../repositories/MedicalHistoryRepository"
import { PatientsDataRepository } from "../repositories/PatientsDataRepository"
import { PatientsRepository } from "../repositories/PatientsRepository"
import { MedicalHistoryService } from "../services/MedicalHistoryService"
import { PatientService } from "../services/PatientsService"

// @ts-ignore
const HTML_SERVICE = HtmlService
// @ts-ignore
const LOGGER = Logger

export function doGet() {
  const template = HTML_SERVICE.createTemplateFromFile('index')
  return HTML_SERVICE.createHtmlOutput(template.evaluate().getContent())
}

export function addPatient(data: PatientDataDTO) {
  try {
    const patientId = PatientService.add(data)
    return { success: true, patientId }
  }
  catch(error) {
    LOGGER.log(error)
    return { success: false, error}
  }
}

export function getAllPatients() {
  const patients = PatientsRepository.getAll()
  LOGGER.log(`${patients.length} patients loaded`)
  return patients
}

export function getPatientById(id: string) {
  const patients = PatientsDataRepository.getById(id)
  LOGGER.log(`Patient with id: ${id} loaded`)
  return PatientDataMapper.mapDataToDTO(patients[0])
}

export function editPatient(patientId: string, data: PatientDataDTO) {
  try {
    PatientService.edit(patientId, data)
    return { success: true, patientId }
  }
  catch(error) {
    LOGGER.log(error)
    return { success: false, error }
  }
}

export function addMedicalHistory(patientId: string, data: MedicalHistoryDTO) {
  try {
    MedicalHistoryService.add(patientId, data)
    return { success: true, patientId }
  }
  catch(error) {
    LOGGER.log(error)
    return { success: false, error }
  }
}

export function getMedicalHistory(id: string) {
  const medicalHistory = MedicalHistoryRepository.getById(id)
  LOGGER.log(`Medical data for patent with id: ${id} loaded`)
  return MedicalHistoryMapper.mapDataToDTO(medicalHistory)
}
