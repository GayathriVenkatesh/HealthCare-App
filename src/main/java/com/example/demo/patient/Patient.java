package com.example.demo.patient;

import java.io.Serializable;
import java.time.LocalDate;
// import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table
public class Patient implements Serializable {
    @Id
    @SequenceGenerator(
        name = "patient_sequence",
        sequenceName = "patient_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "patient_sequence"
    )
    private Long UHID;
    private Long SAM_ID, RCH_ID;
    private String name;
    private LocalDate dob;
    @Transient  
    private Integer age;
    private Character gender;
    private Boolean bpl;
    private String address, religion, caste, relationship, symptoms, referred_by;
    private String contact_no;

    public Patient() {

    }

    public Patient(Long UHID, Long SAM_ID, Long RCH_ID, String name, LocalDate dob, String contact,
    Character gender, Boolean bpl, String addr, String religion, String caste, String relationship, 
    String symptoms, String refer) {
        this.UHID = UHID;
        this.SAM_ID = SAM_ID;
        this.RCH_ID = RCH_ID;
        this.bpl = bpl;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.contact_no = contact;

        this.address = addr;
        this.relationship = relationship;
        this.caste = caste;
        this.symptoms = symptoms;
        this.referred_by = refer;
        this.religion = religion;
    }

    public Patient(Long UHID, Long SAM_ID, Long RCH_ID, String name, LocalDate dob, String contact,
    Character gender, Boolean bpl, String addr, String religion, String symptoms) {
        this.UHID = UHID;
        this.SAM_ID = SAM_ID;
        this.RCH_ID = RCH_ID;
        this.bpl = bpl;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.contact_no = contact;
        this.address = addr;
        this.symptoms = symptoms;
        this.religion = religion;
    }

    public Long getUHId() { return this.UHID; }
    public void setUHId(Long id) { this.UHID = id; }
    public Long getSAMId() { return this.SAM_ID; }
    public void setSAMId(Long id) { this.SAM_ID = id; }
    public Long getRCHId() { return this.RCH_ID; }
    public void setRCHId(Long id) { this.RCH_ID = id; }

    public Character getGender() { return this.gender; }
    public void setGender(Character g) { this.gender = g; }
    public String getContact() { return this.contact_no; }
    public void setContact(String no) { this.contact_no = no; }
    public Boolean getBpl() { return this.bpl; }
    public void setContact(Boolean bpl) { this.bpl = bpl; }

    @Override
    public String toString() {
        return "Patient:" + "\nName: " + name +
        "\nDOB:" + dob + "\nAge: " + age + 
        "\nAddress: " + address + "\nRelation: " + relationship + ", referred by=" + referred_by
        + ", symptoms=" + symptoms + ", religion=" + religion + ", caste=" + caste + '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getReferred_by() {
        return referred_by;
    }

    public void setReferred_by(String referred_by) {
        this.referred_by = referred_by;
    }
}
