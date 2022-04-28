package net.javaguides.springboot.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "healthStatus")
public class HealthStatus implements Serializable {
	@SequenceGenerator(
		name = "healthStatus_sequence",
		sequenceName = "healthStatus_sequence",
		allocationSize = 1
	)
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "healthStatus_sequence"
	)
	@Id
	private Long hsId;
	private Float height;
	private Float weight;
    private Float muac;
	private String growthStatus;
    private String otherSymptoms; 
	private LocalDate date;
	// private Boolean discharged

	@JsonBackReference
	@ManyToOne
    @JoinColumn(name = "samId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Patient patient;

	@JsonBackReference
	@OneToOne
    @JoinColumn(name = "followupId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Followup followup;
	
	public Long getHsId() {
		return hsId;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public void setHsId(Long hsId) {
		this.hsId = hsId;
	}
	public Float getHeight() {
		return height;
	}
	public void setHeight(Float height) {
		this.height = height;
	}
	public Float getWeight() {
		return weight;
	}
	public void setWeight(Float weight) {
		this.weight = weight;
	}
	public Float getMuac() {
		return muac;
	}
	public void setMuac(Float muac) {
		this.muac = muac;
	}
	public String getGrowthStatus() {
		return growthStatus;
	}
	public void setGrowthStatus(String growthStatus) {
		this.growthStatus = growthStatus;
	}
    public String getOtherSymptoms() {
		return otherSymptoms;
	}
	public void setOtherSymptoms(String otherSymptoms) {
		this.otherSymptoms = otherSymptoms;
	}
	public HealthStatus(LocalDate date, Float height, Float weight, Float muac, String growthStatus, String otherSymptoms) {
		this.date = date;
		this.height = height;
        this.weight = weight;
        this.muac = muac;
        this.growthStatus = growthStatus;
        this.otherSymptoms = otherSymptoms;
	}
	public HealthStatus() {
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	@Override
	public String toString() {
		return height + " " + weight + " " + muac + " " + growthStatus;
	}
}

