import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import './plugins/select2/css/select2.min.css'
import './plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'
import SideBarComponent from './SideBarComponent'
// import "./plugins/select2/js/select2.full.min.js"
import $ from 'jquery';

class CreateFollowUp extends Component {
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
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2()
        
            //Initialize Select2 Elements
            $('.select2bs4').select2({
              theme: 'bootstrap4'
            })
        
            //Datemask dd/mm/yyyy
            $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
            //Datemask2 mm/dd/yyyy
            $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' })
            //Money Euro
            $('[data-mask]').inputmask()
        
            //Date picker
            $('#reservationdate').datetimepicker({
                format: 'L'
            });
        
            //Date and time picker
            $('#reservationdatetime').datetimepicker({ icons: { time: 'far fa-clock' } });
        
            //Date range picker
            $('#reservation').daterangepicker()
            //Date range picker with time picker
            $('#reservationtime').daterangepicker({
              timePicker: true,
              timePickerIncrement: 30,
              locale: {
                format: 'MM/DD/YYYY hh:mm A'
              }
            })
            //Date range as a button
           
            //Timepicker
            $('#timepicker').datetimepicker({
              format: 'LT'
            })
        
            //Bootstrap Duallistbox
            $('.duallistbox').bootstrapDualListbox()
        
            //Colorpicker
            $('.my-colorpicker1').colorpicker()
            //color picker with addon
            $('.my-colorpicker2').colorpicker()
        
            $('.my-colorpicker2').on('colorpickerChange', function(event) {
              $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
            })
        
            $("input[data-bootstrap-switch]").each(function(){
              $(this).bootstrapSwitch('state', $(this).prop('checked'));
            })
        
          })
    }

    
     

    render() {
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
                              <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
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
                          <select class="form-control select2" data-placeholder="Choose Area" style={{width: "100%"}}>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </select>
                        </div>
      
                        <div class="form-group">
                          <label>Anganwadi Worker</label>
                          <select class="form-control select2" style={{width: "100%"}}>
                            <option selected="selected">Alabama</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </select>
                        </div>
                      
                    </div>
                    <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                      <div class="mb-3">
                        <a href="/followup-receptionist" class="btn btn-sm btn-success">Create</a>
                        
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
