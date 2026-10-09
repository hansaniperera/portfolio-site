package com.hansaniperera.portfolio.experience;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/experience")
class ExperienceController {

	private final ExperienceService service;

	ExperienceController(ExperienceService service) {
		this.service = service;
	}

	@GetMapping
	List<ExperienceResponse> list() {
		return service.findAll();
	}

}
