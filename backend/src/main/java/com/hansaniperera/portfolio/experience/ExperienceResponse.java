package com.hansaniperera.portfolio.experience;

import java.time.YearMonth;
import java.util.List;

/**
 * API view of an experience entry. Dates serialize as "YYYY-MM"; a null endDate means "present".
 * Internal fields (id, sortOrder) are deliberately left out.
 */
public record ExperienceResponse(String company, String role, String location, YearMonth startDate,
		YearMonth endDate, List<String> responsibilities, List<String> achievements, List<String> techStack) {

	static ExperienceResponse from(Experience experience) {
		return new ExperienceResponse(experience.getCompany(), experience.getRole(), experience.getLocation(),
				YearMonth.from(experience.getStartDate()),
				experience.getEndDate() == null ? null : YearMonth.from(experience.getEndDate()),
				List.copyOf(experience.getResponsibilities()), List.copyOf(experience.getAchievements()),
				List.copyOf(experience.getTechStack()));
	}

}
