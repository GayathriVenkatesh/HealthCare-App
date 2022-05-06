import axios from 'axios';
import authHeader from './auth-header';

class AnganwadiWorkerService {

    getAnganwadiWorkers(){
        return axios.get("http://localhost:8080/api/v1/view-anganwadi-workers", { headers: authHeader() });
    }

    createAnganwadiWorker(summary){
        return axios.post("http://localhost:8080/api/v1/anganwadi-worker", summary, { headers: authHeader() });
    }

    getAnganwadiWorkerById(awwId){
        return axios.get("http://localhost:8080/api/v1/view-anganwadi-worker" + '/' + awwId, { headers: authHeader() });
    }

    getByKeyword(address, locality){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-worker" + '?address=' + address + '&locality=' + locality, { headers: authHeader() });
    }

    updateAnganwadiWorker(worker, awwId){
        return axios.put("http://localhost:8080/api/v1/edit-anganwadi-worker" + '/' + awwId, worker, { headers: authHeader() });
    }

    deleteAnganwadiWorker(awwId){
        return axios.delete("http://localhost:8080/api/v1/delete-anganwadi-worker" + '/' + awwId, { headers: authHeader() });
    }
}

export default new AnganwadiWorkerService()