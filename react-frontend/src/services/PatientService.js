import axios from 'axios';
import authHeader from './auth-header';

class PatientService {

    getPatients(){
        return axios.get("http://localhost:8080/api/v1/view-patients", { headers: authHeader() });
    }

    createPatient(employee){
        console.log("Patient inside service", employee);
        return axios.post("http://localhost:8080/api/v1/view-patients", employee, { headers: authHeader() });
    }

    getPatientById(employeeId){
        return axios.get("http://localhost:8080/api/v1/view-patient" + '/' + employeeId, { headers: authHeader() });
    }

    getByKeyword(name, address, religion, uhId, sam){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-patient" + '?name=' + name + '&address=' + address + '&religion=' + religion + '&uhId=' + uhId + '&sam=' + sam, { headers: authHeader() });
    }

    updatePatient(employee, employeeId){
        return axios.put("http://localhost:8080/api/v1/edit-patient" + '/' + employeeId, employee, { headers: authHeader() });
    }

    deletePatient(employeeId){
        return axios.delete("http://localhost:8080/api/v1/delete-patient" + '/' + employeeId, { headers: authHeader() });
    }
}

export default new PatientService()