import React, { Component } from 'react'
import AnganwadiWorkerService from '../services/AnganwadiWorkerService'
import FollowupService from '../services/FollowupService'
import './plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'
import './plugins/select2/css/select2.min.css'
import SideBarComponent from './SideBarComponent'
import Select from 'react-select';

class CreateFollowUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
          followupId: 0,
          samId: 0,
          workerId: 0,
          deadline: "2021-01-01", 
          completedOn: "2021-01-01",
          completed: false,
          height: 0,
          weight: 0,
          muac: 0,
          growth: "",
          workers: []
        }
        this.changeSamIdHandler = this.changeSamIdHandler.bind(this);
        this.changeWorkerIdHandler = this.changeWorkerIdHandler.bind(this);
        this.changeDeadlineHandler = this.changeDeadlineHandler.bind(this);
        this.changeCompletedOnHandler = this.changeCompletedOnHandler.bind(this);
        this.changeCompletedHandler = this.changeCompletedHandler.bind(this);
    }

    componentDidMount(){
      AnganwadiWorkerService.getAnganwadiWorkers().then((res) => {
        this.setState({ workers: res.data});
    });
        return;
    }

    getElement(x) {
      return <option>{x.name}</option>
    }

    createFollowUp = (e) => {
      e.preventDefault();
      let f = {samId: this.state.samId,
        workerId: this.state.workerId,
        deadline: this.state.deadline, 
        completedOn: this.state.completedOn,
        completed: this.state.completed
      };
      console.log("BRO I CREATED FOLLOWUP", f);
      FollowupService.createFollowup(f).then(res =>{
          this.props.history.push('/followup-receptionist/1');
      });
  }

  changeSamIdHandler = (event) => { this.setState({samId: event.target.value}); }
  changeWorkerIdHandler = (event) => { 
    this.setState({workerId: event.target.value}); 
    console.log("WORKER", this.state.workerId)
  }
  changeDeadlineHandler = (event) => { this.setState({deadline: event.target.value}); 
  console.log("WORKER", this.state.deadline)
}
  changeCompletedOnHandler = (event) => { this.setState({completedOn: event.target.value}); }
  changeCompletedHandler = (event) => { this.setState({completed: event.target.value}); 
  console.log("WORKER", this.state.completed)
}

    render() {
      console.log("JHBKJJJJJJJJJJ", this.state.workers)
      const options = []
      for(var i = 0; i < this.state.workers.length; i++) {
        options.push({ value: this.state.workers[i].name, label: this.state.workers[i].name })
    }
      // console.log

        return (
          <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div class="wrapper">   
                    <SideBarComponent/>
            <section class="content">
                <script src="./plugins/select2/js/select2.full.min.js"></script>
            <div class="container-fluid">
              
      
              <div class="row">
                <div class="col-md-3">     
                 
      
                </div>
                <div class="col-md-6">
                  <div class="card card-info">
                    <div class="card-header">
                      <h3 class="card-title">Create a Follow-Up Schedule</h3>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>Date:</label>
                          <div class="input-group date" id="reservationdate" data-target-input="nearest">
                              <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate" value={this.state.deadline} onChange={this.changeDeadlineHandler}/>
                              <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                  <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                              </div>
                          </div>
                      </div>
                      {/* <div class="form-group">
                        <label>Date and time:</label>
                          <div class="input-group date" id="reservationdatetime" data-target-input="nearest">
                              <input type="text" class="form-control datetimepicker-input" data-target="#reservationdatetime"/>
                              <div class="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">
                                  <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                              </div>
                          </div>
                      </div> */}
      
                      <div class="form-group">
                          <label>Location</label>
                          <Select class="form-control select2" data-placeholder="Choose Area" style={{width: "100%"}}>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </Select>
                        </div>
      
                        <div class="form-group">
                          <label>Anganwadi Worker</label>
                            <Select class="form-control select2" style={{width: "100%"}} 
                            value={this.state.workerId} onChange={this.changeWorkerIdHandler} options={options}>
                            {/* {Data.map(this.state.workers)} */}
                            
                            {/* <option>Washington</option> */}
                          </Select>
                        </div>
                      
                    </div>
                    <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                      <div class="mb-3">
                        <a href="/followup-receptionist/1" class="btn btn-sm btn-success" onClick={this.createFollowUp}>Create</a>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>       
            </div>
          </section>
            </div> 
            </div>
        )
    }
}

export default CreateFollowUp
