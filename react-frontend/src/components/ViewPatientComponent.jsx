import React, { Component } from 'react'
import PatientService from '../services/PatientService'

class ViewPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // uhId: this.props.match.params.id,  // change this to 1, otherwise uhId will be treated as an automatically generated key
            // uhId: this.props.route.id,
            samId: window.location.pathname.split("/")[2],
            patient: {}
        }
        // this.state.patient.uhId = this.props.match.params.id
    }

    componentDidMount(){
        // console.log("UHID NOW", this.state.patient.uhId)
        PatientService.getPatientById(this.state.samId).then( res => {
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
                            <label> SAM ID: </label>
                            <div> { this.state.patient.samId }</div>
                        </div>
                        <div className = "row">
                            <label> UHID: </label>
                            <div> { this.state.patient.uhId }</div>
                        </div>
                        <div className = "row">
                            <label> Contact Number: </label>
                            <div> { this.state.patient.contactNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div> { this.state.patient.address }</div>
                        </div>
                        <div className = "row">
                            <label> Religion: </label>
                            <div> { this.state.patient.religion }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.patient.gender }</div>
                        </div>
                        <div className = "row">
                            <label> BPL: </label>
                            <div> { this.state.patient.BPL }</div>
                        </div>
                        <div className = "row">
                            <label> Date of Birth: </label>
                            <div> { this.state.patient.dob }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPatientComponent
