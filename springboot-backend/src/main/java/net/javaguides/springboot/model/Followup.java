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
	private Long workerId;
	private LocalDate deadline, completedOn;
	private Boolean completed;
	private Double height, weight, muac;
	private String growth;
	
	@ManyToOne
    @JoinColumn(name = "sam_id")
    private Patient patient;

	public Followup(Long followupId, Long samId, Long workerId, LocalDate deadline, LocalDate completedOn,
			Boolean completed, Double height, Double weight, Double muac, String growth) {
		this.followupId = followupId;
		// this.samId = samId;
		this.workerId = workerId;
		this.deadline = deadline;
		this.completedOn = completedOn;
		this.completed = completed;
		this.height = height;
		this.weight = weight;
		this.muac = muac;
		this.growth = growth;
	}

	public Long getFollowupId() {
		return followupId;
	}
	public void setFollowupId(Long followupId) {
		this.followupId = followupId;
	}
	public Long getWorkerId() {
		return workerId;
	}
	public void setWorkerId(Long workerId) {
		this.workerId = workerId;
	}
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
	public Followup(Long followupId, Long workerId, LocalDate deadline, LocalDate completedOn,
			Boolean completed) {
		this.followupId = followupId;
		this.workerId = workerId;
		this.deadline = deadline;
		this.completedOn = completedOn;
		this.completed = completed;
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
	public String getGrowth() {
		return growth;
	}
	public void setGrowth(String growth) {
		this.growth = growth;
	}
}

