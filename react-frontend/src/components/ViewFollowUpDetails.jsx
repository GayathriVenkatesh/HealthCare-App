import React, { Component } from 'react'
import FollowupService from '../services/FollowupService'
import SideBarComponent from './SideBarComponent'

class ViewFollowUpDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            followupId: window.location.pathname.split("/")[2],
            // status: {},
            height: 30,
            weight: 0,
            muac: 0,
            growth: "Normal"
        }
    }

    componentDidMount(){
        console.log("UHID NOW", this.state.followupId)
        FollowupService.getHealthRecord(this.state.followupId).then( res => {
            this.setState({height: res.data[0], weight: res.data[1], muac: res.data[2], growth: res.data[3]});
        })
        console.log("IUBKNION", this.state.growth)
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
                                {this.state.height}
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
                            {this.state.weight}
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
                            {this.state.muac}
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
                            <span class={"badge badge-" + (this.state.growth == "Normal" ? "success" : (this.state.growth == "Overweight" ? "warning" : "danger"))}>{this.state.growth}</span>
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
