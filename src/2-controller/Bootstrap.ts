import { Sheet } from "../0-model/0-database/Sheet"
import { Spreadsheet } from "../0-model/0-database/Spreadsheet"
import { MedicalHistoryMapper } from "../0-model/1-mappers/MedicalHistoryMapper"
import { PatientDataMapper } from "../0-model/1-mappers/PatientDataMapper"
import { PatientMapper } from "../0-model/1-mappers/PatientMapper"
import { MedicalHistoryRepository } from "../0-model/2-repositories/MedicalHistoryRepository"
import { PatientsDataRepository } from "../0-model/2-repositories/PatientsDataRepository"
import { PatientsRepository } from "../0-model/2-repositories/PatientsRepository"
import { MedicalHistoryService } from "./0-services/MedicalHistoryService"
import { PatientsService } from "./0-services/PatientsService"

export class Bootstrap {
  private spreadsheet

  constructor (spreadsheet: Spreadsheet) {
    this.spreadsheet = spreadsheet
  }

  bootstrapPatientsService() {
    const patientDataSheet = new Sheet(this.spreadsheet, 'PATIENTS_DATA_SHEET')
    const patientDataMapper = new PatientDataMapper()
    const patientsDataRepository = new PatientsDataRepository(patientDataSheet, patientDataMapper)
    const patientsSheet = new Sheet(this.spreadsheet, 'PATIENTS_SHEET')
    const patientMapper = new PatientMapper()
    const patientsRepository = new PatientsRepository(patientsSheet, patientMapper)
    return new PatientsService(patientsRepository, patientsDataRepository, patientDataMapper)
  }

  bootstrapMedicalHistoryService() {
    const medicalHistorySheet = new Sheet(this.spreadsheet, 'MEDICAL_HISTORY_SHEET')
    const medicalHistoryMapper = new MedicalHistoryMapper()
    const medicalHistoryRepository = new MedicalHistoryRepository(medicalHistorySheet, medicalHistoryMapper)
    return new MedicalHistoryService(medicalHistoryRepository, medicalHistoryMapper)
  }
}

