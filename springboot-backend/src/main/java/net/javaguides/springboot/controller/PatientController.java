package net.javaguides.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Patient;
import net.javaguides.springboot.service.PatientService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PatientController {

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/view-patients")
    public List<Patient> getPatients() { 
        System.out.print("INSIDE THIS FUNC"); 
        return patientService.getPatients();
    }

    @GetMapping("/delete-patient/{uhid}")
    public List<Patient> deletePatient(@PathVariable Long uhid) { 
        System.out.print("INSIDE THIS FUNC"); 
        List<Patient> p = patientService.getPatients();
        List<Patient> ans = new ArrayList<Patient>();
        for (Patient patient: p) {
            if(patient.getUhid() != uhid) {
                ans.add(patient);
            }
        }
        return ans;
    }
    
	// @GetMapping("/search/{keyword}")
    // public ResponseEntity<List<Patient>> search(@PathVariable String keyword) {
    //     List<Patient> p = patientService.getByKeyword(keyword);    
    //     return ResponseEntity.ok(p); 
    // }

    @RequestMapping(value = "/search")
    @ResponseBody
    public List<Patient> search(@RequestParam("name") String name, 
                                @RequestParam("address") String address,
                                @RequestParam("religion") String religion,
                                @RequestParam("uhid") String uhid,
                                // @RequestParam("rch") String rch,
                                @RequestParam("sam") String sam
                            ) {
        List<Patient> p = patientService.getByKeyword(name, address, religion, uhid, sam);    
        return p; 
    }

    @GetMapping("/view-patient/{uhid}")
	public ResponseEntity<Patient> getPatientById(@PathVariable Long uhid) {
        System.out.print("ID PASSED ........" + uhid + "\n");
		Patient p = patientService.getPatientById(uhid);	
        System.out.print("PATIENT HERE "+ p);
        return ResponseEntity.ok(p);			
	}

    @PostMapping("/view-patients")
	public void addPatient(@RequestBody Patient p) {
		patientService.addPatient(p);
	}

    @PutMapping("/edit-patient/{uhid}")
	public ResponseEntity<Patient> updatePatient(@PathVariable Long uhid, @RequestBody Patient p) {
        Patient patient = patientService.getPatientById(uhid);
        patient.setName(p.getName());
        patient.setReligion(p.getReligion());
        patient.setBpl(p.getBpl());
        patient.setGender(p.getGender());
        patient.setCaste(p.getCaste());
        patient.setRch_id(p.getRch_id());
        patient.setSam_id(p.getSam_id());
        patient.setAddress(p.getAddress());
        // LIKE THIS WRITE FOR ALL

        patientService.addPatient(patient);
        return ResponseEntity.ok(patient);
    }

//  @PutMapping("/edit-patient/{uhid}")
// 	public void updatePatient(
//             @PathVariable("uhid") Long uhid,
//             @RequestParam(required = false) String name,
//             @RequestParam(required = false) LocalDate dob,
//             @RequestParam(required = false) Long SAM_ID,
//             @RequestParam(required = false) Long RCH_ID,
//             @RequestParam(required = false) String contact_no,
//             @RequestParam(required = false) Character gender,
//             @RequestParam(required = false) Boolean bpl,

//             @RequestParam(required = false) String addr,
//             @RequestParam(required = false) String religion,
//             @RequestParam(required = false) String caste,
//             @RequestParam(required = false) String relationship,
//             @RequestParam(required = false) String symptoms,
//             @RequestParam(required = false) String refer
            
//             // @RequestParam(required = false) HashMap<String, Double> health
//         ) {
// 		patientService.updatePatient(uhid, name, dob, SAM_ID,
//          RCH_ID, contact_no, gender, bpl, addr, religion,
//         caste, relationship, symptoms, refer);
// 	}
}
