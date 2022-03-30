import React, { Component } from 'react'
import FollowupService from '../services/FollowupService';
import PatientService from '../services/PatientService';
import SideBarComponent from './SideBarComponent';

class UpdateFollowupComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // UHID: this.props.match.params.id,
            samId: window.location.pathname.split("/")[2],
            followupId: window.location.pathname.split("/")[3],
            deadline_date: "2021-01-01",          
            location: ""
        }
        this.changeDeadlineHandler = this.changeDeadlineHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);        
        this.updateFollowup = this.updateFollowup.bind(this);
    }

    componentDidMount(){
        FollowupService.getFollowupById(this.state.followupId).then( (res) => {
            let followup = res.data;
                this.setState({
                    deadline_date: followup.deadline_date,
                    location: followup.location, 
                });
            });
        console.log("I HAVE MOUNTED", this.state)

    }

    updateFollowup = (e) => {
        console.log("INSIDE UPDATE")
        e.preventDefault();
        let f = {deadline_date: this.state.deadline_date, 
            location: this.state.location,  
          };
        console.log('patient => ' + JSON.stringify(f));
         console.log('id => ' + JSON.stringify(this.state.samId));
        FollowupService.updateFollowup(f, this.state.samId, this.state.followupId).then( res => {
            this.props.history.push('/followup-receptionist/' + this.state.samId);
        });
    }
    
    changeDeadlineHandler= (event) => { this.setState({deadline_date: event.target.value}); }
    changeLocationHandler= (event) => { this.setState({location: event.target.value}); }

    cancel(){
        this.props.history.push('/followup-receptionist/' + this.state.samId);
    }

    render() {
        return (
            <div className="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                  <div className="wrapper">   
                      <SideBarComponent/>
              <section className="content">
                  <script src="./plugins/select2/js/select2.full.min.js"></script>
              <div className="container-fluid">
                
        
                <div className="row">
                  <div className="col-md-3">     
                   
        
                  </div>
                  <div className="col-md-6">
                    <div className="card card-info">
                      <div className="card-header">
                        <h3 className="card-title">Update Follow-Up Schedule</h3>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label>Date:</label>
                            <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate" value={this.state.deadline_date} onChange={this.changeDeadlineHandler}/>
                                <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input name="samId" className="form-control" type="text" value={this.state.location} onChange={this.changeLocationHandler}/>  
                          </div>
                        
                      </div>
                      <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                        <div className="mb-3">
                          <button className="btn btn-sm btn-success" onClick={this.updateFollowup}>Save</button>
                          
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

export default UpdateFollowupComponent
