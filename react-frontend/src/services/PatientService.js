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

    getByKeyword(name, address, religion, uhid, sam){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search" + '?name=' + name + '&address=' + address + '&religion=' + religion + '&uhid=' + uhid + '&sam=' + sam);
    }

    updatePatient(employee, employeeId){
        return axios.put("http://localhost:8080/api/v1/edit-patient" + '/' + employeeId, employee);
    }

    deletePatient(employeeId){
        return axios.delete("http://localhost:8080/api/v1/delete-patient" + '/' + employeeId);
    }
}

export default new PatientService()