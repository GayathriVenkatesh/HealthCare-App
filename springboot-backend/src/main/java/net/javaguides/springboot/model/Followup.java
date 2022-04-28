package net.javaguides.springboot.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
	private LocalDate deadlineDate, completed_date;
	private Boolean completed;
	// private Double height, weight, muac;
	// private String growthStatus;
	private String location;
	private LocalDate createdDate = LocalDate.now();
	
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

	// @JsonManagedReference
	// @OneToOne
    // @JoinColumn(name = "hs_id")
    // private HealthStatus healthStatus;

	@OneToOne(mappedBy = "followupId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private HealthStatus healthStatus;

	public Followup(Long followupId, LocalDate deadlineDate, String location, LocalDate completed_date,
			Boolean completed, Float height, Float weight, Float muac, String growthStatus) {
		this.followupId = followupId;
		// this.samId = samId;
		// this.awwId = awwId;
		this.deadlineDate = deadlineDate;
		this.location = location;
		this.completed_date = completed_date;
		this.completed = completed;
		// this.height = height;
		// this.weight = weight;
		// this.muac = muac;
		// this.growthStatus = growthStatus;
		this.healthStatus = new HealthStatus(completed_date, height, weight, muac, growthStatus, "");
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
	public LocalDate getDeadlineDate() {
		return deadlineDate;
	}
	public void setDeadlineDate(LocalDate deadlineDate) {
		this.deadlineDate = deadlineDate;
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
	public Followup(Long followupId, LocalDate deadlineDate, String location, LocalDate completed_date,
			Boolean completed) {
		this.followupId = followupId;
		// this.samId = samId;
		// this.awwId = awwId;
		this.deadlineDate = deadlineDate;
		this.completed_date = completed_date;
		this.completed = completed;
		this.location = location;
	}
	public Followup() {
	}
	
	public HealthStatus getHealthStatus() {
		return this.healthStatus;
	}
	public void setHealthStatus(HealthStatus healthStatus) {
		this.healthStatus = healthStatus;
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