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

import net.javaguides.springboot.model.HealthStatus;
import net.javaguides.springboot.service.HealthStatusService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class HealthStatusController {

    private final HealthStatusService healthStatusService;

    @Autowired
    public HealthStatusController(HealthStatusService healthStatusService) {
        this.healthStatusService = healthStatusService;
    }

    @GetMapping("/view-healthStatuss")
	public List<HealthStatus> getHealthStatuss() {
		return healthStatusService.getHealthStatuss();
	}

    @GetMapping("/view-healthStatus/{hsId}")
	public ResponseEntity<HealthStatus> getHealthStatusById(@PathVariable Long hsId) {
		HealthStatus p = healthStatusService.getHealthStatusById(hsId);	
        return ResponseEntity.ok(p);			
	}

    @PostMapping("/healthStatus")
	public void addHealthStatus(@RequestBody HealthStatus p) {
		healthStatusService.addHealthStatus(p);
	}

    @PutMapping("/edit-healthStatus/{hsId}")
	public ResponseEntity<HealthStatus> updateHealthStatus(@PathVariable Long hsId, @RequestBody HealthStatus p) {
        HealthStatus healthStatus = healthStatusService.getHealthStatusById(hsId);
        healthStatus.setHsId(p.getHsId());
        healthStatus.setHeight(p.getHeight());
        healthStatus.setWeight(p.getWeight());
        healthStatus.setMuac(p.getMuac());
        healthStatus.setGrowthStatus(p.getGrowthStatus());
        healthStatus.setOtherSymptoms(p.getOtherSymptoms());

        healthStatusService.addHealthStatus(healthStatus);
        return ResponseEntity.ok(healthStatus);
    }

    @RequestMapping(value = "/search-healthStatus")
    @ResponseBody
    public List<HealthStatus> search(@RequestParam("hsId") String hsId
                            ) {
        List<HealthStatus> p = healthStatusService.getByKeyword(hsId);    
        return p; 
    }

    @GetMapping("/delete-healthStatus/{healthStatus_id}")
    public List<HealthStatus> deleteHealthStatus(@PathVariable Long healthStatus_id) { 
        List<HealthStatus> p = healthStatusService.getHealthStatuss();
        List<HealthStatus> ans = new ArrayList<HealthStatus>();
        for (HealthStatus f: p) {
            if(f.getHealthStatusId() != healthStatus_id) {
                ans.add(f);
            }
        }
        return ans;
    }  
}
