package com.hansaniperera.portfolio.project;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/projects")
class ProjectController {

	private final ProjectService service;

	ProjectController(ProjectService service) {
		this.service = service;
	}

	@GetMapping
	List<ProjectResponse> list() {
		return service.findPublished();
	}

	@GetMapping("/{slug}")
	ProjectResponse get(@PathVariable String slug) {
		// Unknown and unpublished slugs both return 404, so drafts are not discoverable.
		// The slug is not echoed back in the error body.
		return service.findPublishedBySlug(slug)
			.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found"));
	}

}
