package net.javaguides.springboot.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.DischargeSummary;

@Repository
// Long will be the data type of primary key (UHID)
// If you change UHID to string, make this also string
public interface DischargeSummaryRepository extends JpaRepository<DischargeSummary, Long> {
    
    // @Query("SELECT p FROM Patient p WHERE p.UHID = ?1")
    Optional<DischargeSummary> findByDischargeId(Long dischargeId);
    Optional<DischargeSummary> findBySamId(Long sam_id);

    @Query("SELECT d FROM DischargeSummary d WHERE str(d.samId) LIKE %?1% AND str(d.dischargeId) LIKE %?2% AND d.name LIKE %?3%")
    public List<DischargeSummary> findByKeyword(String sam_id, String discharge_id, String name);
}
