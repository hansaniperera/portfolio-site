package com.hansaniperera.portfolio.project;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

/** Read-only in v1: content is managed through Flyway migrations, so there are no setters. */
@Entity
@Table(name = "project")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String slug;

	private String title;

	@Convert(converter = ProjectCategoryConverter.class)
	private ProjectCategory category;

	private String employer;

	private String role;

	private String summary;

	private LocalDate startDate;

	private LocalDate endDate;

	@JdbcTypeCode(SqlTypes.ARRAY)
	private List<String> techStack;

	private String linkUrl;

	private int sortOrder;

	private boolean published;

	protected Project() {
		// for JPA
	}

	Project(String slug, String title, ProjectCategory category, String employer, String role, String summary,
			LocalDate startDate, LocalDate endDate, List<String> techStack, String linkUrl, int sortOrder,
			boolean published) {
		this.slug = slug;
		this.title = title;
		this.category = category;
		this.employer = employer;
		this.role = role;
		this.summary = summary;
		this.startDate = startDate;
		this.endDate = endDate;
		this.techStack = techStack;
		this.linkUrl = linkUrl;
		this.sortOrder = sortOrder;
		this.published = published;
	}

	public Long getId() {
		return id;
	}

	public String getSlug() {
		return slug;
	}

	public String getTitle() {
		return title;
	}

	public ProjectCategory getCategory() {
		return category;
	}

	public String getEmployer() {
		return employer;
	}

	public String getRole() {
		return role;
	}

	public String getSummary() {
		return summary;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public List<String> getTechStack() {
		return techStack;
	}

	public String getLinkUrl() {
		return linkUrl;
	}

	public int getSortOrder() {
		return sortOrder;
	}

	public boolean isPublished() {
		return published;
	}

}
