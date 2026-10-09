package com.hansaniperera.portfolio.experience;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ExperienceService {

	private final ExperienceRepository repository;

	ExperienceService(ExperienceRepository repository) {
		this.repository = repository;
	}

	/** All entries, newest first (encoded in sort_order). */
	public List<ExperienceResponse> findAll() {
		return repository.findAllByOrderBySortOrderAsc().stream().map(ExperienceResponse::from).toList();
	}

}
