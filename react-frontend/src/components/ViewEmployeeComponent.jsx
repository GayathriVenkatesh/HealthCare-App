import React, { Component } from 'react'
import PatientService from '../services/PatientService'

class ViewEmployeeComponent extends Component {
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
        // console.log("UHID NOW", this.state.patient.uhid)
        PatientService.getPatientById(this.state.uhid).then( res => {
            console.log("dataa", res.data)
            console.log("PATH", window.location.pathname.split("/")[2])
            
            this.setState({patient: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Patient Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Patient Name: </label>
                            <div> { this.state.patient.name }</div>
                        </div>
                        <div className = "row">
                            <label> Contact Number: </label>
                            <div> { this.state.patient.contact_no }</div>
                        </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div> { this.state.patient.address }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
