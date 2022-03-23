package net.javaguides.springboot.service;
import java.time.LocalDate;
import java.util.List;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.HealthStatus;
import net.javaguides.springboot.repository.HealthStatusRepository;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HealthStatusService {

    private final HealthStatusRepository healthStatusRepository;

    @Autowired
    public HealthStatusService(HealthStatusRepository healthStatusRepository) {
        this.healthStatusRepository = healthStatusRepository;
    }
    public List<HealthStatus> getHealthStatuss() {
        return this.healthStatusRepository.findAll();
    }

    public List<HealthStatus> getByKeyword(String hsId){
        return this.healthStatusRepository.findByKeyword(hsId);
    }

    public HealthStatus getHealthStatusById(Long id) {
        HealthStatus d = this.healthStatusRepository.findByHealthStatusId(id).orElseThrow(
            () -> new ResourceNotFoundException("No health status with given ID")
        );
        return d;
    }

    @Transactional
    public void updateHealthStatus(Long hsId, Float height, Float weight, Float muac, String growthStatus, String otherSymptoms) {

        HealthStatus d = healthStatusRepository.findByHealthStatusId(hsId)
            .orElseThrow(() -> new IllegalStateException(
                "Follow up with ID " + hsId + " does not exist"
            ));
        
        if (height != null && !height.equals(d.getHeight())) { d.setHeight(height); }
        if (weight != null && !weight.equals(d.getWeight())) { d.setWeight(weight); }
        if (muac != null && !muac.equals(d.getMuac())) { d.setMuac(muac); }
        if (growthStatus != null && !growthStatus.equals(d.getGrowthStatus())) { d.setGrowthStatus(growthStatus); }       
        if (otherSymptoms != null && !otherSymptoms.equals(d.getOtherSymptoms())) { d.setOtherSymptoms(otherSymptoms); }       
    }

    public void addHealthStatus(HealthStatus d) {
        this.healthStatusRepository.save(d);
    }
}
