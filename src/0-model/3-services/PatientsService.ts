import { Mapper } from "../0-interfaces/Mapper"
import { PatientData } from "../../0-model/1-mappers/PatientDataMapper"
import { Patient } from "../../0-model/1-mappers/PatientMapper"
import { Repository } from "../0-interfaces/Repository"

export class PatientsService {
  private patientsRepository: Repository
  private dataRepository: Repository
  private dataMapper: Mapper

  constructor(patientsRepository: Repository,
      dataRepository: Repository, dataMapper: Mapper) {
    this.patientsRepository = patientsRepository
    this.dataRepository = dataRepository
    this.dataMapper = dataMapper
  }

  getAll() {
    return this.patientsRepository.getAll()
  }

  getDataById(id: string) {
    const data = this.dataRepository.getById(id)
    return this.dataMapper.mapDataToDto(data[0])
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
