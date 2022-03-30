import axios from 'axios';

class AnganwadiWorkerService {

    getAnganwadiWorkers(){
        return axios.get("http://localhost:8080/api/v1/view-anganwadi-workers");
    }

    createAnganwadiWorker(summary){
        return axios.post("http://localhost:8080/api/v1/anganwadi-worker", summary);
    }

    getAnganwadiWorkerById(awwId){
        return axios.get("http://localhost:8080/api/v1/view-anganwadi-worker" + '/' + awwId);
    }

    getByKeyword(address, locality){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-worker" + '?address=' + address + '&locality=' + locality);
    }

    updateAnganwadiWorker(worker, awwId){
        return axios.put("http://localhost:8080/api/v1/edit-anganwadi-worker" + '/' + awwId, worker);
    }

    deleteAnganwadiWorker(awwId){
        return axios.delete("http://localhost:8080/api/v1/delete-anganwadi-worker" + '/' + awwId);
    }
}

export default new AnganwadiWorkerService()