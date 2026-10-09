package com.hansaniperera.portfolio.project;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;

import org.junit.jupiter.api.Test;

class ProjectResponseTests {

	@Test
	void mapsDatesToYearMonthAndCategoryToLowercase() {
		Project project = new Project("ez-cash", "EZ Cash", ProjectCategory.PROFESSIONAL, "Axiata Digital Labs",
				"Software Engineer", "Summary.", LocalDate.of(2021, 7, 1), LocalDate.of(2022, 3, 1),
				List.of("Java", "Spring Boot"), "https://example.com", 3, true);

		ProjectResponse response = ProjectResponse.from(project);

		assertThat(response.slug()).isEqualTo("ez-cash");
		assertThat(response.category()).isEqualTo("professional");
		assertThat(response.startDate()).isEqualTo(YearMonth.of(2021, 7));
		assertThat(response.endDate()).isEqualTo(YearMonth.of(2022, 3));
		assertThat(response.techStack()).containsExactly("Java", "Spring Boot");
		assertThat(response.linkUrl()).isEqualTo("https://example.com");
	}

	@Test
	void nullEndDateStaysNullMeaningPresent() {
		Project project = new Project("ongoing", "Ongoing", ProjectCategory.ACADEMIC, null, null, "Summary.",
				LocalDate.of(2025, 3, 1), null, List.of(), null, 1, true);

		ProjectResponse response = ProjectResponse.from(project);

		assertThat(response.endDate()).isNull();
		assertThat(response.category()).isEqualTo("academic");
		assertThat(response.employer()).isNull();
	}

}
