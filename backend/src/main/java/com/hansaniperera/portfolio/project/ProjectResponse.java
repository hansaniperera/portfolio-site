package com.hansaniperera.portfolio.project;

import java.time.YearMonth;
import java.util.List;

/**
 * API view of a project. Dates serialize as "YYYY-MM"; a null endDate means "present".
 * Internal fields (id, sortOrder, published) are deliberately left out.
 */
public record ProjectResponse(String slug, String title, String category, String employer, String role,
		String summary, YearMonth startDate, YearMonth endDate, List<String> techStack, String linkUrl) {

	static ProjectResponse from(Project project) {
		return new ProjectResponse(project.getSlug(), project.getTitle(), project.getCategory().value(),
				project.getEmployer(), project.getRole(), project.getSummary(), YearMonth.from(project.getStartDate()),
				project.getEndDate() == null ? null : YearMonth.from(project.getEndDate()),
				List.copyOf(project.getTechStack()), project.getLinkUrl());
	}

}
