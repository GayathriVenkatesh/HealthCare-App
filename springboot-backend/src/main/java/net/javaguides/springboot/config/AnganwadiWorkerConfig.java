package net.javaguides.springboot.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import net.javaguides.springboot.model.AnganwadiWorker;
import net.javaguides.springboot.repository.AnganwadiWorkerRepository;

@Configuration
public class AnganwadiWorkerConfig {
    @Bean
    CommandLineRunner commandLineRunner3(AnganwadiWorkerRepository repo) {
        return args -> {
            AnganwadiWorker d1 = new AnganwadiWorker(
				"Worker 1", "9877637495", "Indiranagar", "Bangalore"
			);

            AnganwadiWorker d2 = new AnganwadiWorker(
				"Worker 2", "8977946264", "Chembur", "Mumbai"
			);

            repo.saveAll(List.of(d1, d2));
        };
    } 
}