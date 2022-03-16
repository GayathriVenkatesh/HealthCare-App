import axios from 'axios';

class FollowupService {

    getFollowups(){
        return axios.get("http://localhost:8080/api/v1/view-followups");
    }

    createFollowup(employee){
        console.log("Followup inside service", employee);
        return axios.post("http://localhost:8080/api/v1/view-followups", employee);
    }

    getFollowupById(employeeId){
        return axios.get("http://localhost:8080/api/v1/view-followup" + '/' + employeeId);
    }

    getByKeyword(samId, workerId, completed){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-followup" + '?samId=' + samId + '&workerId=' + workerId + '&completed=' + completed);
    }

    updateFollowup(employee, employeeId){
        return axios.put("http://localhost:8080/api/v1/edit-followup" + '/' + employeeId, employee);
    }

    deleteFollowup(followupId){
        return axios.delete("http://localhost:8080/api/v1/delete-followup" + '/' + followupId);
    }
}

export default new FollowupService()