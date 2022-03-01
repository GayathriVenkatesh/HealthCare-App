import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import SideBarComponent from './SideBarComponent'

class ViewFollowUpDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // uhid: this.props.match.params.id,  // change this to 1, otherwise uhid will be treated as an automatically generated key
            // uhid: this.props.route.id,
            uhid: window.location.pathname.split("/")[2],
            patient: {}
        }
        // this.state.patient.uhid = this.props.match.params.id
    }

    componentDidMount(){
        console.log("UHID NOW", this.state.uhid)
        PatientService.getPatientById(this.state.uhid).then( res => {
            console.log("dataa", res.data)
            console.log("PATH", window.location.pathname.split("/")[2])
            
            this.setState({patient: res.data});
        })
    }

    render() {
        return (
            <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div class="wrapper">   
                    <SideBarComponent/>
          <section class="content">

          <div class="card" style={{width: "60%"}}>
            <div class="card-header">
    
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i class="fas fa-minus"></i>
                </button>
                
              </div>
            </div>
            <div class="card-body p-7">
    
              <table class="table table-striped projects">
                  <thead>
                      <tr>
                          <th style={{width: "1%"}}>
                          </th>
                          <th style={{width: "70%"}}>
                              Parameters
                          </th>
                          <th style={{width: "40%"}}>
                              Value
                          </th>
                          
                          <th style={{width: "8%"}} class="text-center">
                          </th>
                          <th style={{width: "20%"}}>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                          </td>
                          <td>
                              <a>
                                  Height
                              </a>   
                          </td>
    
                          <td>
                            <a>
                                162 cm
                            </a>   
                        </td>
                          
                      </tr>
    
                      <tr>
                        <td>
                        </td>
                        <td>
                            <a>
                                Weight
                            </a>   
                        </td>
    
                        <td>
                          <a>
                              36 kg
                          </a>   
                      </td>
                        
                    </tr>
    
                    <tr>
                        <td>
                        </td>
                        <td>
                            <a>
                                Middle Upper Arm Circumference
                            </a>   
                        </td>
    
                        <td>
                          <a>
                              14 cm
                          </a>   
                      </td>
                        
                    </tr>
    
                    <tr>
                        <td>
                        </td>
                        <td>
                            <a>
                                Growth Status
                            </a>   
                        </td>
    
                        <td>
                            <span class="badge badge-danger">Underweight</span>
                        </td>  
                        
                    </tr>
                     
    
                  </tbody>
              </table>
             
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
              <a href="followup.html" class="btn btn-sm btn-info">Back</a>
          </div>
        </section>
        </div>
        </div>
        )
    }
}

export default ViewFollowUpDetails
