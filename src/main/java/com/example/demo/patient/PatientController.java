package com.example.demo.patient;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/patient")
public class PatientController {

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping
	public List<Patient> getPatients() {
		return patientService.getPatients();
	}

    @PostMapping
	public void addPatient(@RequestBody Patient p) {
		patientService.addPatient(p);
	}

    @PutMapping(path = "{uhid}")
	public void updatePatient(
            @PathVariable("uhid") Long uhid,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) LocalDate dob
        ) {
		patientService.updatePatient(uhid, name, dob);
	}
}
