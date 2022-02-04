package com.example.demo.patient;
import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }
    public List<Patient> getPatients() {
        return this.patientRepository.findAll();
    }

    public List<String> getStringPatients() {
        List<Patient> p = this.patientRepository.findAll();
        List<String> myList = List.of(); 
        for(Patient patient : p) {
            String s = patient.toString();
            myList.add(s);
        }
        return myList;
    }

    @Transactional
    public void updatePatient(Long uhid, String name, LocalDate dob) {
        Patient p = patientRepository.findByUHID(uhid)
            .orElseThrow(() -> new IllegalStateException(
                "Patient with UHID " + uhid + " does not exist"
            ));
        
        if (name != null && name.length() > 0 && !name.equals(p.getName())) {
            p.setName(name);
        }

        if (dob != null && !dob.equals(p.getDob())) {
            p.setDob(dob);
        }
    }

    public void addPatient(Patient p) {
        // Optional<Patient> optionalPatient = patientRepository.findByUHID(p.getUHId());
        // if (optionalPatient.isPresent()) {
        //     throw new IllegalStateException("UHID exists");
        // }
        // System.out.println("PATIENT " + p.getName() + p.getGender() + p.getBpl() + p.getReligion() + p.getAddress() + p.getDob() + p.getUHId() + p.getRCHId() + " " + p.getContact());
        patientRepository.save(p);
    }
}
