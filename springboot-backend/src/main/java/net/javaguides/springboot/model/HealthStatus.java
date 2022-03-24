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

	public Long getHsId() {
		return hsId;
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
	public HealthStatus(Long hsId, Float height, Float weight, Float muac, String growthStatus, String otherSymptoms) {
		this.hsId = hsId;
		this.height = height;
        this.weight = weight;
        this.muac = muac;
        this.growthStatus = growthStatus;
        this.otherSymptoms = otherSymptoms;
	}
	public HealthStatus() {
	}
}

