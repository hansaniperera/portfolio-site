package com.hansaniperera.portfolio.experience;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

/** Read-only in v1: content is managed through Flyway migrations, so there are no setters. */
@Entity
@Table(name = "experience")
public class Experience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String company;

	private String role;

	private String location;

	private LocalDate startDate;

	private LocalDate endDate;

	@JdbcTypeCode(SqlTypes.ARRAY)
	private List<String> responsibilities;

	@JdbcTypeCode(SqlTypes.ARRAY)
	private List<String> achievements;

	@JdbcTypeCode(SqlTypes.ARRAY)
	private List<String> techStack;

	private int sortOrder;

	protected Experience() {
		// for JPA
	}

	Experience(String company, String role, String location, LocalDate startDate, LocalDate endDate,
			List<String> responsibilities, List<String> achievements, List<String> techStack, int sortOrder) {
		this.company = company;
		this.role = role;
		this.location = location;
		this.startDate = startDate;
		this.endDate = endDate;
		this.responsibilities = responsibilities;
		this.achievements = achievements;
		this.techStack = techStack;
		this.sortOrder = sortOrder;
	}

	public Long getId() {
		return id;
	}

	public String getCompany() {
		return company;
	}

	public String getRole() {
		return role;
	}

	public String getLocation() {
		return location;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public List<String> getResponsibilities() {
		return responsibilities;
	}

	public List<String> getAchievements() {
		return achievements;
	}

	public List<String> getTechStack() {
		return techStack;
	}

	public int getSortOrder() {
		return sortOrder;
	}

}
