import axios from 'axios';

class FollowupService {

    getFollowups(){
        return axios.get("http://localhost:8080/api/v1/view-followups");
    }

    createFollowup(samId, followup){
        console.log("Followup inside service", followup);
        return axios.post("http://localhost:8080/api/v1/followup/" + samId, followup);
    }

    getFollowupById(employeeId){
        return axios.get("http://localhost:8080/api/v1/view-followup" + '/' + employeeId);
    }

    getFollowupBySamId(samId){
        return axios.get("http://localhost:8080/api/v1/view-patient-followup" + '/' + samId);
    }

    getFollowupByWorkerId(workerId){
        return axios.get("http://localhost:8080/api/v1/view-worker-followup" + '/' + workerId);
    }

    getByKeyword(workerId, completed){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-followup" + '?workerId=' + workerId + '&completed=' + completed);
    }

    getHealthRecord(followupId){
        return axios.get("http://localhost:8080/api/v1/view-health-record" + '/' + followupId);
    }

    updateFollowup(followup, samId, followupId){
        return axios.put("http://localhost:8080/api/v1/edit-followup" + '/' + samId + '/' + followupId, followup);
    }

    deleteFollowup(followupId){
        return axios.delete("http://localhost:8080/api/v1/delete-followup" + '/' + followupId);
    }
}

export default new FollowupService()