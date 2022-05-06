import axios from 'axios';
import authHeader from './auth-header';

class DischargeSummaryService {

    getDischargeSummaries(){
        return axios.get("http://localhost:8080/api/v1/view-discharge-summaries", { headers: authHeader() });
    }

    createDischargeSummary(samId, summary){
        console.log("Patient inside service", summary);
        return axios.post("http://localhost:8080/api/v1/discharge-summary/" + samId, summary, { headers: authHeader() });
    }

    getDischargeSummaryById(dischargeId){
        return axios.get("http://localhost:8080/api/v1/view-discharge-summary" + '/' + dischargeId, { headers: authHeader() });
    }

    getDischargeSummaryBySamId(samId){
        return axios.get("http://localhost:8080/api/v1/view-discharge-summary-patient" + '/' + samId, { headers: authHeader() });
    }

    getByKeyword(dischargeId, name){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-summary" + '?dischargeId=' + dischargeId + '&name=' + name, { headers: authHeader() });
    }

    updateDischargeSummary(discharge, dischargeId){
        return axios.put("http://localhost:8080/api/v1/edit-discharge-summary" + '/' + dischargeId, discharge, { headers: authHeader() });
    }

    deleteDischargeSummary(dischargeId){
        return axios.delete("http://localhost:8080/api/v1/delete-discharge-summary" + '/' + dischargeId, { headers: authHeader() });
    }
}

export default new DischargeSummaryService()