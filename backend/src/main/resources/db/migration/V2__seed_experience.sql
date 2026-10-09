-- Roles from the CV (same content as frontend/src/data/experience.ts), newest first.

INSERT INTO experience (company, role, location, start_date, end_date, responsibilities, achievements, tech_stack, sort_order)
VALUES
(
    'BForgeLabs', 'Intermediate Software Engineer', 'Remote', '2025-09-01', NULL,
    ARRAY[
        'Build and maintain RESTful APIs, event-driven microservices, and cloud-based backend services with a focus on scalability, reliability, and performance.',
        'Mentor and guide junior developers through code reviews, technical discussions, and best practice standards to accelerate team growth.',
        'Collaborate with cross-functional teams to define technical requirements and ensure adherence to scalable, maintainable design principles.'
    ],
    ARRAY[]::TEXT[],
    ARRAY['Java 17', 'Spring Boot', 'Microservices', 'Kafka', 'PostgreSQL', 'Docker', 'AWS (Lambda)', 'Git'],
    1
),
(
    'Kaleris', 'Software Engineer', 'Sri Lanka', '2022-04-01', '2024-07-01',
    ARRAY[
        'Designed, developed, and maintained enterprise-grade backend and full-stack solutions for large-scale supply chain systems (CMSS, TCM, TRAX).',
        'Implemented RESTful APIs and event-driven components to support real-time operational workflows.',
        'Performed Java platform migration from Java 8 to Java 17, improving code maintainability and system performance.',
        'Implemented Kafka consumers to enable parallel processing of high-volume transactional data (CMSS).',
        'Contributed to CI/CD pipelines and containerized deployments using Docker and Kubernetes in a DevOps environment.',
        'Worked with AWS services including S3 and Secrets Manager to manage application configuration and secure credentials within the CMSS platform.',
        'Monitored and supported production systems using Grafana and the EFK stack, participating in on-call rotations.',
        'Collaborated with international teams in Agile ceremonies: sprint planning, design discussions, and code reviews.'
    ],
    ARRAY[
        'Successfully led the Java 8 to Java 17 migration in collaboration with senior engineers, delivering the upgrade without production incidents and improving long-term system stability and maintainability.',
        'Improved dashboard performance and data accuracy by optimizing Angular-based frontend components.',
        'Enhanced system scalability and throughput through Kafka-based parallel processing.',
        'Reduced production issue resolution time through effective monitoring, root-cause analysis, and timely patch releases.'
    ],
    ARRAY['Java 11', 'Java 17', 'JavaScript', 'TypeScript', 'Spring Boot', 'Spring', 'Angular', 'GWT', 'SmartGWT', 'Microservices', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins', 'Gradle', 'AWS (S3, Secrets Manager)', 'EFK'],
    2
),
(
    'Axiata Digital Labs', 'Software Engineer', 'Sri Lanka', '2021-02-01', '2022-03-01',
    ARRAY[
        'Developed backend architectures for fintech platforms supporting payments, remittances, and financial transactions.',
        'Designed and implemented RESTful APIs and microservices acting as a BFF layer for mobile and web applications.',
        'Integrated third-party and bank APIs to enable secure deposits, remittances, and merchant payments.',
        'Built Dockerized microservices using Express.js to process large XML payloads (4GB+) and run Elasticsearch validations.',
        'Applied test-driven development practices, implementing unit, integration, and acceptance tests to ensure API reliability and production readiness.',
        'Assisted with production issue resolution and prepared technical and non-technical documentation.',
        'Mentored junior developers and interns through knowledge-transfer sessions.'
    ],
    ARRAY[
        'Delivered secure and scalable backend services for high-volume fintech transaction systems.',
        'Improved API reliability and quality through structured testing and TDD practices.',
        'Supported timely production releases by improving containerization and deployment workflows.'
    ],
    ARRAY['Java 7', 'Java 8', 'Spring Boot', 'Spring MVC', 'Node.js', 'Express', 'JavaScript', 'Java Server Faces (JSF)', 'Jakarta Server Pages (JSP)', 'XML', 'JSON', 'REST & SOAP APIs', 'PostgreSQL', 'Oracle DB', 'Docker', 'RabbitMQ', 'Eureka', 'Zuul (API Gateway)', 'Spring Security', 'Hibernate', 'Maven', 'Apache Tomcat', 'SonarQube', 'JUnit', 'Mockito', 'REST Assured', 'Postman'],
    3
),
(
    'Axiata Digital Labs', 'Intern Software Engineer', 'Sri Lanka', '2020-07-01', '2021-02-01',
    ARRAY[
        'Developed application features using ASP.NET and JavaScript, integrating RESTful APIs for frontend-backend sync.',
        'Collaborated with clients and team members in an Agile development environment.'
    ],
    ARRAY[
        'Delivered functional features aligned with business requirements.',
        'Gained hands-on experience in Agile development and enterprise software delivery.'
    ],
    ARRAY['ASP.NET', 'JavaScript', 'REST APIs', 'HTML', 'CSS', 'Bootstrap', 'Git', 'Postman'],
    4
),
(
    'EchonLabs', 'Freelance Associate Software Engineer', 'Sri Lanka', '2019-06-01', '2020-06-01',
    ARRAY[
        'Delivered full-stack web application features using the MEAN stack for the Post-Sales project.',
        'Participated in planning and design discussions and coordinated development tasks.'
    ],
    ARRAY[
        'Successfully delivered customer-facing features in a freelance environment.',
        'Led and mentored a team of three intern developers.'
    ],
    ARRAY['MongoDB', 'Express.js', 'Angular', 'Node.js (MEAN Stack)', 'CSS', 'JSON', 'NoSQL', 'Git'],
    5
);
