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
@Table(name = "followup")
public class Followup implements Serializable {
	@SequenceGenerator(
		name = "followup_sequence",
		sequenceName = "followup_sequence",
		allocationSize = 1
	)
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "followup_sequence"
	)
	@Id
	private Long followupId;
	// private Long samId;
	// private Long workerId;
	private LocalDate deadline, completedOn;
	private Boolean completed;
	private Double height, weight, muac;
	private String growthStatus, location;
	
	@JsonBackReference
	@ManyToOne
    @JoinColumn(name = "samId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Patient patient;

	@JsonBackReference(value = "worker-followup")
	@ManyToOne
    @JoinColumn(name = "workerId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private AnganwadiWorker worker;

	public Followup(Long followupId, LocalDate deadline, String location, LocalDate completedOn,
			Boolean completed, Double height, Double weight, Double muac, String growthStatus) {
		this.followupId = followupId;
		// this.samId = samId;
		// this.workerId = workerId;
		this.deadline = deadline;
		this.location = location;
		this.completedOn = completedOn;
		this.completed = completed;
		this.height = height;
		this.weight = weight;
		this.muac = muac;
		this.growthStatus = growthStatus;
	}

	public Long getFollowupId() {
		return followupId;
	}
	public void setFollowupId(Long followupId) {
		this.followupId = followupId;
	}

	// public Long getSamId() {
	// 	return this.samId;
	// }
	// public void setSamId(Long samId) {
	// 	this.samId = samId;
	// }
	public String getLocation() {
		return this.location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	// public Long getWorkerId() {
	// 	return workerId;
	// }
	// public void setWorkerId(Long workerId) {
	// 	this.workerId = workerId;
	// }
	public LocalDate getDeadline() {
		return deadline;
	}
	public void setDeadline(LocalDate deadline) {
		this.deadline = deadline;
	}
	public LocalDate getCompletedOn() {
		return completedOn;
	}
	public void setCompletedOn(LocalDate completedOn) {
		this.completedOn = completedOn;
	}
	public Boolean getCompleted() {
		return completed;
	}
	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
	public Followup(Long followupId, LocalDate deadline, String location, LocalDate completedOn,
			Boolean completed) {
		this.followupId = followupId;
		// this.samId = samId;
		// this.workerId = workerId;
		this.deadline = deadline;
		this.completedOn = completedOn;
		this.completed = completed;
		this.location = location;
	}
	public Followup() {
	}
	public Double getHeight() {
		return height;
	}
	public void setHeight(Double height) {
		this.height = height;
	}
	public Double getWeight() {
		return weight;
	}
	public void setWeight(Double weight) {
		this.weight = weight;
	}
	public Double getMuac() {
		return muac;
	}
	public void setMuac(Double muac) {
		this.muac = muac;
	}
	public String getGrowthStatus() {
		return growthStatus;
	}
	public void setGrowthStatus(String growthStatus) {
		this.growthStatus = growthStatus;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public AnganwadiWorker getWorker() {
		return worker;
	}

	public void setWorker(AnganwadiWorker worker) {
		this.worker = worker;
	}
}

