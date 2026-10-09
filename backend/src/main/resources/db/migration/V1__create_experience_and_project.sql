-- Dates are stored as the first of the month; a null end_date means "present".

CREATE TABLE experience (
    id               BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    company          VARCHAR(100) NOT NULL,
    role             VARCHAR(100) NOT NULL,
    location         VARCHAR(100) NOT NULL,
    start_date       DATE         NOT NULL,
    end_date         DATE,
    responsibilities TEXT[]       NOT NULL DEFAULT '{}',
    achievements     TEXT[]       NOT NULL DEFAULT '{}',
    tech_stack       TEXT[]       NOT NULL DEFAULT '{}',
    sort_order       INTEGER      NOT NULL,
    CONSTRAINT experience_start_first_of_month CHECK (EXTRACT(DAY FROM start_date) = 1),
    CONSTRAINT experience_end_first_of_month CHECK (end_date IS NULL OR EXTRACT(DAY FROM end_date) = 1),
    CONSTRAINT experience_end_not_before_start CHECK (end_date IS NULL OR end_date >= start_date)
);

CREATE TABLE project (
    id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug       VARCHAR(200) NOT NULL UNIQUE,
    title      VARCHAR(200) NOT NULL,
    category   VARCHAR(20)  NOT NULL,
    employer   VARCHAR(100),
    role       VARCHAR(100),
    summary    TEXT         NOT NULL,
    start_date DATE         NOT NULL,
    end_date   DATE,
    tech_stack TEXT[]       NOT NULL DEFAULT '{}',
    link_url   VARCHAR(500),
    sort_order INTEGER      NOT NULL,
    published  BOOLEAN      NOT NULL DEFAULT FALSE,
    CONSTRAINT project_category_valid CHECK (category IN ('professional', 'academic')),
    CONSTRAINT project_slug_format CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
    CONSTRAINT project_start_first_of_month CHECK (EXTRACT(DAY FROM start_date) = 1),
    CONSTRAINT project_end_first_of_month CHECK (end_date IS NULL OR EXTRACT(DAY FROM end_date) = 1),
    CONSTRAINT project_end_not_before_start CHECK (end_date IS NULL OR end_date >= start_date)
);
