// Roles quoted from the CV, newest first. Dates are YYYY-MM; end is null for a current role.

export type Role = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string | null;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
};

export const experience: Role[] = [
  {
    id: 'bforgelabs',
    title: 'Intermediate Software Engineer',
    company: 'BForgeLabs',
    location: 'Remote',
    start: '2025-09',
    end: null,
    responsibilities: [
      'Build and maintain RESTful APIs, event-driven microservices, and cloud-based backend services with a focus on scalability, reliability, and performance.',
      'Mentor and guide junior developers through code reviews, technical discussions, and best practice standards to accelerate team growth.',
      'Collaborate with cross-functional teams to define technical requirements and ensure adherence to scalable, maintainable design principles.',
    ],
    achievements: [],
    techStack: [
      'Java 17',
      'Spring Boot',
      'Microservices',
      'Kafka',
      'PostgreSQL',
      'Docker',
      'AWS (Lambda)',
      'Git',
    ],
  },
  {
    id: 'kaleris',
    title: 'Software Engineer',
    company: 'Kaleris',
    location: 'Sri Lanka',
    start: '2022-04',
    end: '2024-07',
    responsibilities: [
      'Designed, developed, and maintained enterprise-grade backend and full-stack solutions for large-scale supply chain systems (CMSS, TCM, TRAX).',
      'Implemented RESTful APIs and event-driven components to support real-time operational workflows.',
      'Performed Java platform migration from Java 8 to Java 17, improving code maintainability and system performance.',
      'Implemented Kafka consumers to enable parallel processing of high-volume transactional data (CMSS).',
      'Contributed to CI/CD pipelines and containerized deployments using Docker and Kubernetes in a DevOps environment.',
      'Worked with AWS services including S3 and Secrets Manager to manage application configuration and secure credentials within the CMSS platform.',
      'Monitored and supported production systems using Grafana and the EFK stack, participating in on-call rotations.',
      'Collaborated with international teams in Agile ceremonies: sprint planning, design discussions, and code reviews.',
    ],
    achievements: [
      'Successfully led the Java 8 to Java 17 migration in collaboration with senior engineers, delivering the upgrade without production incidents and improving long-term system stability and maintainability.',
      'Improved dashboard performance and data accuracy by optimizing Angular-based frontend components.',
      'Enhanced system scalability and throughput through Kafka-based parallel processing.',
      'Reduced production issue resolution time through effective monitoring, root-cause analysis, and timely patch releases.',
    ],
    techStack: [
      'Java 11',
      'Java 17',
      'JavaScript',
      'TypeScript',
      'Spring Boot',
      'Spring',
      'Angular',
      'GWT',
      'SmartGWT',
      'Microservices',
      'Kafka',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Gradle',
      'AWS (S3, Secret Manager)',
      'EFK',
    ],
  },
  {
    id: 'axiata-digital-labs',
    title: 'Software Engineer',
    company: 'Axiata Digital Labs',
    location: 'Sri Lanka',
    start: '2021-02',
    end: '2022-03',
    responsibilities: [
      'Developed backend architectures for fintech platforms supporting payments, remittances, and financial transactions.',
      'Designed and implemented RESTful APIs and microservices acting as a BFF layer for mobile and web applications.',
      'Integrated third-party and bank APIs to enable secure deposits, remittances, and merchant payments.',
      'Built Dockerized microservices using Express.js to process large XML payloads (4GB+) and run Elasticsearch validations.',
      'Applied test-driven development practices, implementing unit, integration, and acceptance tests to ensure API reliability and production readiness.',
      'Assisted with production issue resolution and prepared technical and non-technical documentation.',
      'Mentored junior developers and interns through knowledge-transfer sessions.',
    ],
    achievements: [
      'Delivered secure and scalable backend services for high-volume fintech transaction systems.',
      'Improved API reliability and quality through structured testing and TDD practices.',
      'Supported timely production releases by improving containerization and deployment workflows.',
    ],
    techStack: [
      'Java 7',
      'Java 8',
      'Spring Boot',
      'Spring MVC',
      'Node.js',
      'Express',
      'JavaScript',
      'Java Server Faces (JSF)',
      'Jakarta Server Pages (JSP)',
      'XML',
      'JSON',
      'REST & SOAP APIs',
      'PostgreSQL',
      'Oracle DB',
      'Docker',
      'RabbitMQ',
      'Eureka',
      'Zuul (API Gateway)',
      'Spring Security',
      'Hibernate',
      'Maven',
      'Apache Tomcat',
      'SonarQube',
      'JUnit',
      'Mockito',
      'REST Assured',
      'Postman',
    ],
  },
  {
    id: 'axiata-digital-labs-intern',
    title: 'Intern Software Engineer',
    company: 'Axiata Digital Labs',
    location: 'Sri Lanka',
    start: '2020-07',
    end: '2021-02',
    responsibilities: [
      'Developed application features using ASP.NET and JavaScript, integrating RESTful APIs for frontend-backend sync.',
      'Collaborated with clients and team members in an Agile development environment.',
    ],
    achievements: [
      'Delivered functional features aligned with business requirements.',
      'Gained hands-on experience in Agile development and enterprise software delivery.',
    ],
    techStack: ['ASP.NET', 'JavaScript', 'REST APIs', 'HTML', 'CSS', 'Bootstrap', 'Git', 'Postman'],
  },
  {
    id: 'echonlabs',
    title: 'Freelance Associate Software Engineer',
    company: 'EchonLabs',
    location: 'Sri Lanka',
    start: '2019-06',
    end: '2020-06',
    responsibilities: [
      'Delivered full-stack web application features using the MEAN stack for the Post-Sales project.',
      'Participated in planning and design discussions and coordinated development tasks.',
    ],
    achievements: [
      'Successfully delivered customer-facing features in a freelance environment.',
      'Led and mentored a team of three intern developers.',
    ],
    techStack: [
      'MongoDB',
      'Express.js',
      'Angular',
      'Node.js (MEAN Stack)',
      'CSS',
      'JSON',
      'NoSQL',
      'Git',
    ],
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2025-09' -> 'Sep 2025'. Formatted by hand to avoid locale/timezone differences. */
export function formatMonth(yyyyMm: string): string {
  const [year, month] = yyyyMm.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function formatPeriod(role: Pick<Role, 'start' | 'end'>): string {
  return `${formatMonth(role.start)} – ${role.end ? formatMonth(role.end) : 'Present'}`;
}
