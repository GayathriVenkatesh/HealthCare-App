import axios from 'axios';

class DischargeSummaryService {

    getDischargeSummaries(){
        return axios.get("http://localhost:8080/api/v1/view-discharge-summaries");
    }

    createDischargeSummary(samId, summary){
        console.log("Patient inside service", summary);
        return axios.post("http://localhost:8080/api/v1/discharge-summary/" + samId, summary);
    }

    getDischargeSummaryById(dischargeId){
        return axios.get("http://localhost:8080/api/v1/view-discharge-summary" + '/' + dischargeId);
    }

    getDischargeSummaryBySamId(samId){
        return axios.get("http://localhost:8080/api/v1/view-discharge-summary-patient" + '/' + samId);
    }

    getByKeyword(dischargeId, name){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-summary" + '?dischargeId=' + dischargeId + '&name=' + name);
    }

    updateDischargeSummary(discharge, dischargeId){
        return axios.put("http://localhost:8080/api/v1/edit-discharge-summary" + '/' + dischargeId, discharge);
    }

    deleteDischargeSummary(dischargeId){
        return axios.delete("http://localhost:8080/api/v1/delete-discharge-summary" + '/' + dischargeId);
    }
}

export default new DischargeSummaryService()