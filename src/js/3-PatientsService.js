class PatientService {
  static add(data) {
    this.checkIfPatientExists(data)
    this.checkIfDataIsValid(data)

    const patientId = Utilities.getUuid()
    PatientsRepository.add(patientId, data)
    PatientsDataRepository.add(patientId, data)

    return patientId
  }

  static checkIfPatientExists(data) {
    const newPatientName = `${data.name} ${data.middleName} ${data.familyName}`
    const oldPatients = PatientsRepository.getAll()

    if (oldPatients?.find(([name, _id]) => name === newPatientName)) {
      throw { code: 'CONFLICT', message: 'Patient already exists.' }
    }
  }

  static edit(patientId, data) {
    this.checkIfNameIsTaken(patientId, data)
    this.checkIfDataIsValid(data)

    PatientsRepository.edit(patientId, data)
    PatientsDataRepository.edit(patientId, data)
  }

  static checkIfNameIsTaken(patientId, data) {
    const newName = `${data.name} ${data.middleName} ${data.familyName}`
    const oldPatients = PatientsRepository.getAll()

    if (oldPatients?.find(([name, id]) => name === newName && id !== patientId)) {
      throw { code: 'CONFLICT', message: 'Edited name refers to another patient.' }
    }
  }

  static checkIfDataIsValid(data) {
    const missingFields = []
    
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