package net.javaguides.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Followup;
import net.javaguides.springboot.service.FollowupService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FollowupController {

    private final FollowupService followupService;

    @Autowired
    public FollowupController(FollowupService followupService) {
        this.followupService = followupService;
    }

    @GetMapping("/view-followups")
	public List<Followup> getFollowups() {
		return followupService.getFollowups();
	}

    @GetMapping("/view-followup/{followupId}")
	public ResponseEntity<Followup> getFollowupById(@PathVariable Long followupId) {
		Followup p = followupService.getFollowupById(followupId);	
        return ResponseEntity.ok(p);			
	}

    @GetMapping("/view-health-record/{followupId}")
	public ResponseEntity<Object> getHealthRecord(@PathVariable Long followupId) {
		Object p = followupService.getHealthRecord(followupId);	
        return ResponseEntity.ok(p);			
	}

    @PostMapping("/followup")
	public void addFollowup(@RequestBody Followup p) {
		followupService.addFollowup(p);
	}

    @PutMapping("/edit-followup/{followupId}")
	public ResponseEntity<Followup> updateFollowup(@PathVariable Long followupId, @RequestBody Followup p) {
        Followup followup = followupService.getFollowupById(followupId);
        followup.setSamId(p.getSamId());
        followup.setWorkerId(p.getWorkerId());
        followup.setDeadline(p.getDeadline());
        followup.setCompletedOn(p.getCompletedOn());
        followup.setCompleted(p.getCompleted());

        followupService.addFollowup(followup);
        return ResponseEntity.ok(followup);
    }

    @RequestMapping(value = "/search-followup")
    @ResponseBody
    public List<Followup> search(@RequestParam("workerId") String workerId, 
                                @RequestParam("samId") String samId,
                                @RequestParam("completed") String completed
                            ) {
        List<Followup> p = followupService.getByKeyword(samId, workerId, completed);    
        return p; 
    }

    @GetMapping("/delete-followup/{followup_id}")
    public List<Followup> deleteFollowup(@PathVariable Long followup_id) { 
        List<Followup> p = followupService.getFollowups();
        List<Followup> ans = new ArrayList<Followup>();
        for (Followup f: p) {
            if(f.getFollowupId() != followup_id) {
                ans.add(f);
            }
        }
        return ans;
    }  
}
