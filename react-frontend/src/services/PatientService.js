import axios from 'axios';

class PatientService {

    getPatients(){
        return axios.get("http://localhost:8080/api/v1/view-patients");
    }

    createPatient(employee){
        console.log("Patient inside service", employee);
        return axios.post("http://localhost:8080/api/v1/view-patients", employee);
    }

    getPatientById(employeeId){
        return axios.get("http://localhost:8080/api/v1/view-patient" + '/' + employeeId);
    }

    updatePatient(employee, employeeId){
        return axios.put("http://localhost:8080/api/v1/edit-patient" + '/' + employeeId, employee);
    }

    // deletePatient(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new PatientService()