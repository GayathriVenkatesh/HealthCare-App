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
	// private Long awwId;
	private LocalDate deadline_date, completed_date;
	private Boolean completed;
	private String location;
	private LocalDate created_date = LocalDate.now();
	
	@JsonBackReference
	@ManyToOne
    @JoinColumn(name = "samId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Patient patient;

	@JsonBackReference(value = "worker-followup")
	@ManyToOne
    @JoinColumn(name = "awwId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private AnganwadiWorker worker;

	public Followup(Long followupId, LocalDate deadline_date, String location, LocalDate completed_date,
			Boolean completed) {
		this.followupId = followupId;
		// this.samId = samId;
		// this.awwId = awwId;
		this.deadline_date = deadline_date;
		this.location = location;
		this.completed_date = completed_date;
		this.completed = completed;
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
	// 	return awwId;
	// }
	// public void setWorkerId(Long awwId) {
	// 	this.awwId = awwId;
	// }
	public LocalDate getDeadline() {
		return deadline_date;
	}
	public void setDeadline(LocalDate deadline_date) {
		this.deadline_date = deadline_date;
	}
	public LocalDate getCompletedOn() {
		return completed_date;
	}
	public void setCompletedOn(LocalDate completed_date) {
		this.completed_date = completed_date;
	}
	public Boolean getCompleted() {
		return completed;
	}
	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
	public Followup(Long followupId, LocalDate deadline_date, String location, LocalDate completed_date,
			Boolean completed) {
		this.followupId = followupId;
		// this.samId = samId;
		// this.awwId = awwId;
		this.deadline_date = deadline_date;
		this.completed_date = completed_date;
		this.completed = completed;
		this.location = location;
	}
	public Followup() {
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

