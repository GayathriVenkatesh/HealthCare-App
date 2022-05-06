import axios from 'axios';
import authHeader from './auth-header';

class HealthStatusService {

    getHealthStatuses(){
        return axios.get("http://localhost:8080/api/v1/view-healthstatuses", { headers: authHeader() });
    }

    createHealthStatus(samId, hs){
        return axios.post("http://localhost:8080/api/v1/healthStatus/" + samId, hs, { headers: authHeader() });
    }

    getHealthStatusById(hsId){
        return axios.get("http://localhost:8080/api/v1/view-healthStatus" + '/' + hsId, { headers: authHeader() });
    }

    getHealthStatusBySamId(samId){
        return axios.get("http://localhost:8080/api/v1/view-patient-healthstatus" + '/' + samId, { headers: authHeader() });
    }

    getByKeyword(hsId){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-healthStatus" + '?hsId=' + hsId, { headers: authHeader() });
    }

    updateHealthStatus(hs, samId, hsId){
        return axios.put("http://localhost:8080/api/v1/edit-healthStatus" + '/' + samId + '/' + hsId, hs, { headers: authHeader() });
    }

    deleteHealthStatus(hsId){
        return axios.delete("http://localhost:8080/api/v1/delete-healthStatus" + '/' + hsId, { headers: authHeader() });
    }
}

export default new HealthStatusService()