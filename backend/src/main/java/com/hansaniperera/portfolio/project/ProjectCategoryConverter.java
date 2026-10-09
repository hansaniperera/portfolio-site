package com.hansaniperera.portfolio.project;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

/** Maps the enum to the lowercase values allowed by the project_category_valid check constraint. */
@Converter
class ProjectCategoryConverter implements AttributeConverter<ProjectCategory, String> {

	@Override
	public String convertToDatabaseColumn(ProjectCategory category) {
		return category == null ? null : category.value();
	}

	@Override
	public ProjectCategory convertToEntityAttribute(String value) {
		return value == null ? null : ProjectCategory.fromValue(value);
	}

}
