import { PatientData } from "../mappers/PatientDataMapper"
import { Patient } from "../mappers/PatientMapper"
import { PatientsDataRepository } from "../repositories/PatientsDataRepository"
import { PatientsRepository } from "../repositories/PatientsRepository"

export class PatientsService {
  private patientsRepository: PatientsRepository
  private dataRepository: PatientsDataRepository

  constructor(patientsRepository: PatientsRepository,
      dataRepository: PatientsDataRepository) {
    this.patientsRepository = patientsRepository
    this.dataRepository = dataRepository
  }

  add(data: PatientData) {
    this.checkIfPatientExists(data)
    this.checkIfDataIsValid(data)

    const patientId = Utilities.getUuid()
    this.patientsRepository.add(patientId, data)
    this.dataRepository.add(patientId, data)

    return patientId
  }

  private checkIfPatientExists(data: Patient) {
    const newPatientName = `${data.name} ${data.middleName} ${data.familyName}`
    const oldPatients = this.patientsRepository.getAll()

    if (oldPatients?.find(([name, _id]) => name === newPatientName)) {
      throw { code: 'CONFLICT', message: 'Patient already exists.' }
    }
  }

  edit(patientId: string, data: PatientData) {
    this.checkIfNameIsTaken(patientId, data)
    this.checkIfDataIsValid(data)

    this.patientsRepository.edit(patientId, data)
    this.dataRepository.edit(patientId, data)
  }

  checkIfNameIsTaken(patientId: string, data: Patient) {
    const newName = `${data.name} ${data.middleName} ${data.familyName}`
    const oldPatients = this.patientsRepository.getAll()

    if (oldPatients?.find(([name, id]) => name === newName && id !== patientId)) {
      throw { code: 'CONFLICT', message: 'Edited name refers to another patient.' }
    }
  }

  private checkIfDataIsValid(data: PatientData) {
    const missingFields: string[] = []

    if (!data.name) {
      missingFields.push('name')
    }
    if (!data.familyName) {
      missingFields.push('familyName')
    }
    if (!data.egn) {
      missingFields.push('egn')
    }
    if (!data.hasAllergies) {
      missingFields.push('hasAllergies')
    }

    if (missingFields.length) {
      throw { code: 'BAD_REQUEST', message: `One or more required fields are missing. ${missingFields.join(', ')}` }
    }
  }
}
