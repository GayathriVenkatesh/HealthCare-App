// @Column(name = "first_name")
// private String firstName;

package net.javaguides.springboot.model;

// package com.example.demo.patient;

import java.io.Serializable;
import java.time.LocalDate;
// import javax.persistence.*;
import java.util.HashMap;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "patient")
public class Patient implements Serializable {
	@SequenceGenerator(
		name = "patient_sequence",
		sequenceName = "patient_sequence",
		allocationSize = 1
	)
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "patient_sequence"
	)
	@Id
	private Long uhid;
	private Long sam_id, rch_id;
	private String name;
	private LocalDate dob;
	@Transient  
	private Integer age;
	private Character gender;
	private Boolean bpl;
	private String address, religion, caste, relationship, symptoms, referred_by;
	private String contact_no;

	private HashMap<String, Double> health_params = new HashMap<String, Double>();

	public Patient() {}
	
	public Patient(Long UHID, Long sam_id, Long rch_id, String name, LocalDate dob, String contact_no,
	Character gender, Boolean bpl, String addr, String religion, String caste, String relationship, 
	String symptoms, String refer, List<Double> health) {
		this.uhid = UHID;
		this.sam_id = sam_id;
		this.rch_id = sam_id;
		this.bpl = bpl;
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.contact_no = contact_no;

		this.address = addr;
		this.relationship = relationship;
		this.caste = caste;
		this.symptoms = symptoms;
		this.referred_by = refer;
		this.religion = religion;

		this.health_params.put("height", health.get(0));
		this.health_params.put("width", health.get(1));
		this.health_params.put("muac", health.get(2));
		this.health_params.put("growth_status", health.get(3));
	}

	public Patient(Long UHID, Long sam_id, Long rch_id, String name, LocalDate dob, String contact_no,
	Character gender, Boolean bpl, String addr, String religion, String symptoms, List<Double> health) {
		this.uhid = UHID;
		this.sam_id = sam_id;
		this.rch_id = rch_id;
		this.bpl = bpl;
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.contact_no = contact_no;
		this.address = addr;
		this.symptoms = symptoms;
		this.religion = religion;

		this.health_params.put("height", health.get(0));
		this.health_params.put("width", health.get(1));
		this.health_params.put("muac", health.get(2));
		this.health_params.put("growth_status", health.get(3));
	}

	public Long getUhid() { return this.uhid; }
	public void setUhid(Long id) { this.uhid = id; }
	public Long getSam_id() { return this.sam_id; }
	public void setSam_id(Long id) { this.sam_id = id; }
	public Long getRch_id() { return this.rch_id; }
	public void setRch_id(Long id) { this.rch_id = id; }

	public Character getGender() { return this.gender; }
	public void setGender(Character g) { this.gender = g; }
	public String getContact_no() { return this.contact_no; }
	public void setContact_no(String no) { this.contact_no = no; }
	public Boolean getBpl() { return this.bpl; }
	public void setBpl(Boolean bpl) { this.bpl = bpl; }

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

	public HashMap<String, Double> getHealth_params() {
		return health_params;
	}

	public void setHealth_params(HashMap<String, Double> health_params) {
		this.health_params = health_params;
	}

	public String getCaste() {
		return caste;
	}

	public void setCaste(String caste) {
		this.caste = caste;
	}

	public String getRelationship() {
		return relationship;
	}

	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}
}

