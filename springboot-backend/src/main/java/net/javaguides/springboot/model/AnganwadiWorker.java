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
@Table(name = "anganwadi_worker")
public class AnganwadiWorker implements Serializable {
	@SequenceGenerator(
		name = "anganwadi_worker_sequence",
		sequenceName = "anganwadi_worker_sequence",
		allocationSize = 1
	)
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "anganwadi_worker_sequence"
	)
	@Id
	private Long workerId;
	private String name;
	private String contactNo, address, locality;

	public AnganwadiWorker(String name, String contactNo, String address, String locality) {
		this.name = name;
		this.contactNo = contactNo;
		this.address = address;
		this.locality = locality;
	}

	public AnganwadiWorker() {
	}

	public Long getWorkerId() {
		return workerId;
	}
	public void setWorkerId(Long workerId) {
		this.workerId = workerId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}

}

