package net.javaguides.springboot.service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Patient;
import net.javaguides.springboot.repository.PatientRepository;

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
        // if (keyword != null) {
        //     System.out.println("KEYWORD " + keyword);
        //     return this.patientRepository.search(keyword);
        // }
        // return this.patientRepository.findByName("Aruna");
        return this.patientRepository.findAll();
    }

    public List<Patient> getByKeyword(String name, String address, String religion, String uhid, String sam){
        return this.patientRepository.findByKeyword(name, address, religion, uhid, sam);
    }

    public Patient getPatientById(Long uhid) {
        Patient p = this.patientRepository.findByUhid(uhid).orElseThrow(
            () -> new ResourceNotFoundException("No Patient with given UHID")
        );
        System.out.println("NEW PATIENT " + p.getName() + " " + p.getUhid() + " " + p.getContact_no());
        return p;
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
    public void updatePatient(Long uhid, String name, LocalDate dob, Long sam_id,
                Long rch_id, String contact_no, Character gender, Boolean bpl, 
                String addr, String religion, String caste, String relationship, 
                String symptoms, String refer) {

        Patient p = patientRepository.findByUhid(uhid)
            .orElseThrow(() -> new IllegalStateException(
                "Patient with UHID " + uhid + " does not exist"
            ));
        
        if (name != null && name.length() > 0 && !name.equals(p.getName())) { p.setName(name); }
        if (dob != null && !dob.equals(p.getDob())) { p.setDob(dob); }
        if (sam_id != null && sam_id != p.getSam_id()) {  p.setSam_id(sam_id); }
        if (rch_id != null && rch_id != p.getRch_id()) {  p.setRch_id(rch_id); }
        if (contact_no != null && contact_no.length() > 0 && !contact_no.equals(p.getContact_no())) { p.setContact_no(contact_no); }
        if (religion != null && religion.length() > 0 && !religion.equals(p.getReligion())) {
            p.setReligion(religion);
        }
        if (caste != null && caste.length() > 0 && !caste.equals(p.getCaste())) {
            p.setCaste(caste);
        }

        if (relationship != null && relationship.length() > 0 && !relationship.equals(p.getRelationship())) {
            p.setRelationship(relationship);
        }
        if (symptoms != null && symptoms.length() > 0 && !symptoms.equals(p.getSymptoms())) {
            p.setSymptoms(symptoms);
        }
        if (refer != null && refer.length() > 0 && !refer.equals(p.getReferred_by())) {
            p.setReferred_by(refer);
        }

        if (gender != null && gender != p.getGender()) {  p.setGender(gender); }
        if (bpl != null && bpl != p.getBpl()) {  p.setBpl(bpl); }
        // if (health != null && !health.equals(p.getHealth_params())) {
        //     p.setHealth_params(health);
        // }
    }

    public void addPatient(Patient p) {
        // Optional<Patient> optionalPatient = patientRepository.findByUHID(p.getUHId());
        // if (optionalPatient.isPresent()) {
        //     throw new IllegalStateException("UHID exists");
        // }
        patientRepository.save(p);
    }
}
