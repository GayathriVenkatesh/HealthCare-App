package net.javaguides.springboot.service;
import java.time.LocalDate;
import java.util.List;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Followup;
import net.javaguides.springboot.repository.FollowupRepository;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FollowupService {

    private final FollowupRepository followupRepository;

    @Autowired
    public FollowupService(FollowupRepository followupRepository) {
        this.followupRepository = followupRepository;
    }
    public List<Followup> getFollowups() {
        return this.followupRepository.findAll();
    }

<<<<<<< HEAD
    public List<Followup> getByKeyword(String samId, String workerId, String completed){
        return this.followupRepository.findByKeyword(workerId, completed);
    }

    public Object getHealthRecord(Long followupId){
        return this.followupRepository.findHealthRecordById(followupId);
=======
    public List<Followup> getByKeyword(String workerId, String completed){
        return this.followupRepository.findByKeyword(workerId, completed);
>>>>>>> 7adf126cbc1e2bdb469fc77cec1d1f52cf2cff70
    }

    public Followup getFollowupById(Long id) {
        Followup d = this.followupRepository.findByFollowupId(id).orElseThrow(
            () -> new ResourceNotFoundException("No follow up with given ID")
        );
        return d;
    }

    @Transactional
    public void updateFollowup(Long followupId, Long workerId,
	LocalDate deadline, LocalDate completedOn, Boolean completed) {

        Followup d = followupRepository.findByFollowupId(followupId)
            .orElseThrow(() -> new IllegalStateException(
                "Follow up with ID " + followupId + " does not exist"
            ));
        
<<<<<<< HEAD
        // if (samId != null && !samId.equals(d.getSamId())) { d.setSamId(samId); }
=======
>>>>>>> 7adf126cbc1e2bdb469fc77cec1d1f52cf2cff70
        if (workerId != null && !workerId.equals(d.getWorkerId())) { d.setWorkerId(workerId); }
        if (deadline != null && !deadline.equals(d.getDeadline())) { d.setDeadline(deadline); }
        if (completedOn != null && !completedOn.equals(d.getCompletedOn())) { d.setCompletedOn(completedOn); }       
        if (completed != null && !completed.equals(d.getCompleted())) { d.setCompleted(completed); }       
    }

    public void addFollowup(Followup d) {
        this.followupRepository.save(d);
    }
}
