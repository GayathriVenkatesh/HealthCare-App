package com.example.demo.patient;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PatientConfig {
    @Bean
    CommandLineRunner commandLineRunner(PatientRepository repo) {

        return args -> {
            Patient aruna = new Patient(
				1234L, 1234L, 4566L, "Aruna",
				LocalDate.of(2000, 9, 5),
				"9846573842", 'F', true, "Banerghatta",
				"Hindu", "None"
			);

            Patient bob = new Patient(
				3124L, 1234L, 4566L, "Bob",
				LocalDate.of(2010, 9, 5),
				"7022029113",'M', false, "Indiranagar",
				"Christian", "None"
			);

            repo.saveAll(List.of(aruna, bob));
        };
    } 
}