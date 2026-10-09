package com.hansaniperera.portfolio.project;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ProjectService {

	private final ProjectRepository repository;

	ProjectService(ProjectRepository repository) {
		this.repository = repository;
	}

	/** Published projects: professional first, then academic, each newest first (encoded in sort_order). */
	public List<ProjectResponse> findPublished() {
		return repository.findAllByPublishedTrueOrderBySortOrderAsc().stream().map(ProjectResponse::from).toList();
	}

	public Optional<ProjectResponse> findPublishedBySlug(String slug) {
		return repository.findBySlugAndPublishedTrue(slug).map(ProjectResponse::from);
	}

}
