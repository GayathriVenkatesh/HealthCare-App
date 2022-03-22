package net.javaguides.springboot.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	private Long workerId;
	private LocalDate deadline, completedOn;
	private Boolean completed;

    @ManyToOne
    @JoinColumn(name = "sam_id")
    private Patient patient;

	public Long getFollowupId() {
		return followupId;
	}
	public void setFollowupId(Long followupId) {
		this.followupId = followupId;
	}
	public Long getSamId() {
		return samId;
	}
	public void setSamId(Long samId) {
		this.samId = samId;
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
	public Followup(Long followupId, Long samId, Long workerId, LocalDate deadline, LocalDate completedOn,
			Boolean completed) {
		this.followupId = followupId;
		this.samId = samId;
		this.workerId = workerId;
		this.deadline = deadline;
		this.completedOn = completedOn;
		this.completed = completed;
	}
	public Followup() {
	}
}

