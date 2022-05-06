import axios from 'axios';
import authHeader from './auth-header';

class FollowupService {

    getFollowups(){
        return axios.get("http://localhost:8080/api/v1/view-followups", { headers: authHeader() });
    }

    createFollowup(samId, followup){
        console.log("Followup inside service", followup);
        return axios.post("http://localhost:8080/api/v1/followup/" + samId, followup, { headers: authHeader() });
    }

    getFollowupById(employeeId){
        return axios.get("http://localhost:8080/api/v1/view-followup" + '/' + employeeId, { headers: authHeader() });
    }

    getFollowupBySamId(samId){
        return axios.get("http://localhost:8080/api/v1/view-patient-followup" + '/' + samId, { headers: authHeader() });
    }

    getFollowupByWorkerId(awwId){
        return axios.get("http://localhost:8080/api/v1/view-worker-followup" + '/' + awwId, { headers: authHeader() });
    }

    getByKeyword(awwId, completed){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-followup" + '?awwId=' + awwId + '&completed=' + completed, { headers: authHeader() });
    }

    getHealthRecord(followupId){
        return axios.get("http://localhost:8080/api/v1/view-health-record" + '/' + followupId, { headers: authHeader() });
    }

    updateFollowup(followup, samId, followupId){
        return axios.put("http://localhost:8080/api/v1/edit-followup" + '/' + samId + '/' + followupId, followup, { headers: authHeader() });
    }

    deleteFollowup(followupId){
        return axios.delete("http://localhost:8080/api/v1/delete-followup" + '/' + followupId, { headers: authHeader() });
    }
}

export default new FollowupService()