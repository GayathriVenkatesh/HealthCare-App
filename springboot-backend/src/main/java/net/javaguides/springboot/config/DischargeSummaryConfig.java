package net.javaguides.springboot.config;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import net.javaguides.springboot.model.DischargeSummary;
import net.javaguides.springboot.repository.DischargeSummaryRepository;

@Configuration
public class DischargeSummaryConfig {
    @Bean
    CommandLineRunner commandLineRunner2(DischargeSummaryRepository repo) {
        return args -> {
            DischargeSummary d1 = new DischargeSummary(
				1234L, 1234L, "Aruna",
				LocalDate.of(2021, 7, 5), LocalDate.of(2021, 8, 1),
				35.0, 42.0, 39.0, "7268364729", "poor", ""
			);

            DischargeSummary d2 = new DischargeSummary(
				1234L, 1234L, "Bob",
				LocalDate.of(2021, 7, 5), LocalDate.of(2021, 8, 1),
				35.0, 42.0, 39.0, "7022029113", "poor", ""
			);

            repo.saveAll(List.of(d1, d2));
        };
    } 
}