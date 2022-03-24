package net.javaguides.springboot.config;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import net.javaguides.springboot.model.HealthStatus;
import net.javaguides.springboot.repository.HealthStatusRepository;

@Configuration
public class HealthStatusConfig {
    @Bean
    CommandLineRunner commandLineRunner5(HealthStatusRepository repo) {

        return args -> {
            HealthStatus hs1 = new HealthStatus(
				1234L, 145.0F, 32.0F,
                12.0F, "Status 1",
                "cough"
			);

            HealthStatus hs2 = new HealthStatus(
				2534L, 147.0f, 22.0f,
                12.0f, "Status 2",
                "nil"
			);

            repo.saveAll(List.of(hs1, hs2));
        };
    } 
}