package com.example.demo.patient;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
// Long will be the data type of primary key (UHID)
// If you change UHID to string, make this also string
public interface PatientRepository extends JpaRepository<Patient, Long> {
    
    // @Query("SELECT p FROM Patient p WHERE p.UHID = ?1")
    Optional<Patient> findByUHID(Long UHID);
}
