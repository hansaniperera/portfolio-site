package com.hansaniperera.portfolio.experience;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.nullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.hansaniperera.portfolio.IntegrationTest;

/** Runs against Postgres with the real Flyway migrations and seed data. */
@IntegrationTest
class ExperienceControllerIntegrationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void listReturnsEntriesNewestFirst() throws Exception {
		mockMvc.perform(get("/api/experience"))
			.andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$[*].company").value(contains("BForgeLabs", "Kaleris", "Axiata Digital Labs",
					"Axiata Digital Labs", "EchonLabs")))
			.andExpect(jsonPath("$[*].startDate").value(contains("2025-09", "2022-04", "2021-02", "2020-07",
					"2019-06")));
	}

	@Test
	void currentRoleHasNullEndDateAndFilledArrays() throws Exception {
		mockMvc.perform(get("/api/experience"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$[0].role").value("Intermediate Software Engineer"))
			.andExpect(jsonPath("$[0].location").value("Remote"))
			.andExpect(jsonPath("$[0].endDate").value(nullValue()))
			.andExpect(jsonPath("$[0].responsibilities.length()").value(3))
			.andExpect(jsonPath("$[0].achievements").isEmpty())
			.andExpect(jsonPath("$[0].techStack[0]").value("Java 17"))
			.andExpect(jsonPath("$[1].endDate").value("2024-07"))
			.andExpect(jsonPath("$[0].id").doesNotExist())
			.andExpect(jsonPath("$[0].sortOrder").doesNotExist());
	}

}
