package com.hansaniperera.portfolio.project;

public enum ProjectCategory {

	PROFESSIONAL("professional"),
	ACADEMIC("academic");

	private final String value;

	ProjectCategory(String value) {
		this.value = value;
	}

	/** The lowercase form stored in the database and returned by the API. */
	public String value() {
		return value;
	}

	public static ProjectCategory fromValue(String value) {
		for (ProjectCategory category : values()) {
			if (category.value.equals(value)) {
				return category;
			}
		}
		throw new IllegalArgumentException("Unknown project category: " + value);
	}

}
