package net.javaguides.springboot.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Followup;

@Repository

public interface FollowupRepository extends JpaRepository<Followup, Long> {
    
    Optional<Followup> findByFollowupId(Long followupId);

    @Query("SELECT p FROM Followup p WHERE str(p.samId) LIKE %?1% AND str(p.workerId) LIKE %?2% AND str(p.completed) LIKE %?3%")
    public List<Followup> findByKeyword(String samId, String workerId, String completed);
}
