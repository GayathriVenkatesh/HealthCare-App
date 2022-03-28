import axios from 'axios';

class HealthStatusService {

    getHealthStatuses(){
        return axios.get("http://localhost:8080/api/v1/view-healthstatuses");
    }

    createHealthStatus(samId, hs){
        return axios.post("http://localhost:8080/api/v1/healthStatus/" + samId, hs);
    }

    getHealthStatusById(hsId){
        return axios.get("http://localhost:8080/api/v1/view-healthStatus" + '/' + hsId);
    }

    getHealthStatusBySamId(samId){
        return axios.get("http://localhost:8080/api/v1/view-patient-healthstatus" + '/' + samId);
    }

    getByKeyword(hsId){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-healthStatus" + '?hsId=' + hsId);
    }

    updateHealthStatus(hs, samId, hsId){
        return axios.put("http://localhost:8080/api/v1/edit-healthStatus" + '/' + samId + '/' + hsId, hs);
    }

    deleteHealthStatus(hsId){
        return axios.delete("http://localhost:8080/api/v1/delete-healthStatus" + '/' + hsId);
    }
}

export default new HealthStatusService()