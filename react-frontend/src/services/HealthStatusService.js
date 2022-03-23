import axios from 'axios';

class HealthStatusService {

    getHealthStatuss(){
        return axios.get("http://localhost:8080/api/v1/view-healthStatuss");
    }

    createHealthStatus(employee){
        console.log("HealthStatus inside service", employee);
        return axios.post("http://localhost:8080/api/v1/view-healthStatuss", employee);
    }

    getHealthStatusById(employeeId){
        return axios.get("http://localhost:8080/api/v1/view-healthStatus" + '/' + employeeId);
    }

    getByKeyword(hsId){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-healthStatus" + '?hsId=' + hsId);
    }

    updateHealthStatus(employee, employeeId){
        return axios.put("http://localhost:8080/api/v1/edit-healthStatus" + '/' + employeeId, employee);
    }

    deleteHealthStatus(hsId){
        return axios.delete("http://localhost:8080/api/v1/delete-healthStatus" + '/' + hsId);
    }
}

export default new HealthStatusService()