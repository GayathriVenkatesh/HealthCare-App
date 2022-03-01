import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';
// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback";
import "./plugins/fontawesome-free/css/all.min.css";
import "./dist/css/adminlte.min.css"
import "./dist/js/pages/dashboard.js";

class SearchFilterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                
        }
        this.submit = this.submit.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    submit(){
        // console.log("CURRENT UHID", uhid);
        var val = document.querySelector('name').value;
        this.props.history.push(`/name=${val}&address=&religion=&uhid=&rch=&sam=`);
    }

    clearSearch() {
        console.log("clearing")
        window.location = "/view-patients";
    }

    render() {
        return ( 
            <div class="col-12 col-md-12 col-lg-12 order-1 order-md-2">
                <div>
                    <form style={{marginTop: "20px", marginBottom: "20px"}}>
                        <input type="text" name="name" id="name" size="50" placeholder="Name" className="col-lg-2" style={{paddingRight: "5px", marginRight: "5px"}}    />
                        <input type="text" name="address" id="address" size="50" placeholder='Address' className="col-lg-2" style={{paddingRight: "5px", marginRight: "5px"}} />
                        <input type="text" name="religion" id="religion" size="50" placeholder='Religion' className="col-lg-2" style={{paddingRight: "5px", marginRight: "5px"}} />
                        <input type="text" name="uhid" id="uhid" size="50" placeholder='UHID' className="col-lg-2" style={{paddingRight: "5px", marginRight: "5px"}} />
                        {/* <input type="text" name="rch" id="rch" size="50" placeholder='RCH ID' className="col-lg-2" style={{paddingRight: "5px", marginRight: "5px"}} /> */}
                        <input type="text" name="sam" id="sam" size="50" placeholder='SAM ID' className="col-lg-2" style={{paddingRight: "5px", marginRight: "5px"}} />
                        {/* <br></br> */}
                        <button className='btn btn-sm btn-primary' type="submit" value="Search" onClick={ () => this.submit()} style={{marginLeft: "5px", paddingRight: "5px", marginRight: "5px", marginBottom: "5px"}} >Search</button>
                        <input className='btn btn-outline-primary btn-sm' type="button" value="Clear" id="btnClear" onClick={ () => this.clearSearch()} style={{paddingRight: "5px", marginRight: "5px", marginBottom: "5px"}} />
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchFilterComponent
