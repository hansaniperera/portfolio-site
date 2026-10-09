package com.hansaniperera.portfolio.experience;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;

import org.junit.jupiter.api.Test;

class ExperienceResponseTests {

	@Test
	void mapsDatesToYearMonthAndCopiesLists() {
		Experience experience = new Experience("Kaleris", "Software Engineer", "Sri Lanka", LocalDate.of(2022, 4, 1),
				LocalDate.of(2024, 7, 1), List.of("Built things."), List.of("Shipped things."), List.of("Java"), 2);

		ExperienceResponse response = ExperienceResponse.from(experience);

		assertThat(response.company()).isEqualTo("Kaleris");
		assertThat(response.startDate()).isEqualTo(YearMonth.of(2022, 4));
		assertThat(response.endDate()).isEqualTo(YearMonth.of(2024, 7));
		assertThat(response.responsibilities()).containsExactly("Built things.");
		assertThat(response.achievements()).containsExactly("Shipped things.");
		assertThat(response.techStack()).containsExactly("Java");
	}

	@Test
	void nullEndDateStaysNullMeaningPresent() {
		Experience experience = new Experience("BForgeLabs", "Engineer", "Remote", LocalDate.of(2025, 9, 1), null,
				List.of(), List.of(), List.of(), 1);

		assertThat(ExperienceResponse.from(experience).endDate()).isNull();
	}

}
