package com.hansaniperera.portfolio.project;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.nullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import com.hansaniperera.portfolio.IntegrationTest;

/** Runs against Postgres with the real Flyway migrations and seed data. */
@IntegrationTest
@Transactional // each test rolls back, so rows inserted here never leak into other tests
class ProjectControllerIntegrationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private JdbcTemplate jdbc;

	@Test
	void listReturnsPublishedProjectsProfessionalFirstThenAcademicNewestFirst() throws Exception {
		mockMvc.perform(get("/api/projects"))
			.andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$[*].slug").value(contains("cmss-contract-management-schedule-system",
					"tcm-truck-carrier-management", "ez-cash", "lesi-pay", "post-sales",
					"prompting-for-security-llm-code-generation-in-angular",
					"a-hybrid-approach-and-ant-colony-optimisation-for-early-stage-diabetes-prediction",
					"responsive-web-application-to-collect-information-for-covid-19",
					"hand-movement-tracking-system-to-detect-drowning")))
			.andExpect(jsonPath("$[*].category").value(contains("professional", "professional", "professional",
					"professional", "professional", "academic", "academic", "academic", "academic")));
	}

	@Test
	void listReturnsYearMonthDatesAndHidesInternalFields() throws Exception {
		mockMvc.perform(get("/api/projects"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$[0].startDate").value("2022-04"))
			.andExpect(jsonPath("$[0].endDate").value("2024-07"))
			.andExpect(jsonPath("$[0].employer").value("Kaleris"))
			.andExpect(jsonPath("$[0].techStack[0]").value("Angular"))
			.andExpect(jsonPath("$[0].linkUrl").value(nullValue()))
			.andExpect(jsonPath("$[0].id").doesNotExist())
			.andExpect(jsonPath("$[0].sortOrder").doesNotExist())
			.andExpect(jsonPath("$[0].published").doesNotExist());
	}

	@Test
	void getReturnsProjectBySlug() throws Exception {
		mockMvc.perform(get("/api/projects/ez-cash"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.slug").value("ez-cash"))
			.andExpect(jsonPath("$.category").value("professional"))
			.andExpect(jsonPath("$.startDate").value("2021-07"))
			.andExpect(jsonPath("$.endDate").value("2022-03"));
	}

	@Test
	void getReturnsProblemDetailForUnknownSlug() throws Exception {
		mockMvc.perform(get("/api/projects/no-such-project"))
			.andExpect(status().isNotFound())
			.andExpect(content().contentType(MediaType.APPLICATION_PROBLEM_JSON))
			.andExpect(jsonPath("$.status").value(404))
			.andExpect(jsonPath("$.detail").value("Project not found"));
	}

	@Test
	void unpublishedProjectIsHiddenFromListAndDetail() throws Exception {
		jdbc.update("""
				INSERT INTO project (slug, title, category, summary, start_date, sort_order, published)
				VALUES ('draft-project', 'Draft project', 'academic', 'Not ready yet.', '2026-01-01', 99, FALSE)
				""");

		mockMvc.perform(get("/api/projects"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.length()").value(9));
		mockMvc.perform(get("/api/projects/draft-project")).andExpect(status().isNotFound());
	}

	@Test
	void publishedProjectWithoutEndDateReturnsNullEndDate() throws Exception {
		jdbc.update("""
				INSERT INTO project (slug, title, category, summary, start_date, sort_order, published)
				VALUES ('ongoing-project', 'Ongoing project', 'academic', 'Still going.', '2026-01-01', 99, TRUE)
				""");

		mockMvc.perform(get("/api/projects/ongoing-project"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.endDate").value(nullValue()))
			.andExpect(jsonPath("$.techStack").isEmpty());
	}

}
