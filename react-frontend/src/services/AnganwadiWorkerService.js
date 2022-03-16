import axios from 'axios';

class AnganwadiWorkerService {

    getAnganwadiWorkers(){
        return axios.get("http://localhost:8080/api/v1/view-anganwadi-workers");
    }

    createAnganwadiWorker(summary){
        return axios.post("http://localhost:8080/api/v1/anganwadi-worker", summary);
    }

    getAnganwadiWorkerById(workerId){
        return axios.get("http://localhost:8080/api/v1/view-anganwadi-worker" + '/' + workerId);
    }

    getByKeyword(address, locality){
        // return axios.get("http://localhost:8080/api/v1/search" + '/' + keyword);
        return axios.get("http://localhost:8080/api/v1/search-worker" + '?address=' + address + '&locality=' + locality);
    }

    updateAnganwadiWorker(worker, workerId){
        return axios.put("http://localhost:8080/api/v1/edit-anganwadi-worker" + '/' + workerId, worker);
    }

    deleteAnganwadiWorker(workerId){
        return axios.delete("http://localhost:8080/api/v1/delete-anganwadi-worker" + '/' + workerId);
    }
}

export default new AnganwadiWorkerService()