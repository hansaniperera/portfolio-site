// Site owner details. Summary is quoted from the CV; lookingFor and workRights were
// supplied directly by Hansani. Do not add phone, address, date of birth or email here.

export type ProfileLink = { label: string; url: string };

export const profile = {
  name: 'Hansani Perera',
  title: 'Software Engineer',
  summary:
    'Software Engineer with 5+ years of experience designing, developing, and maintaining enterprise-grade and fintech applications across backend and full-stack systems. Experienced across the software lifecycle, from requirements and automated testing to production deployment and support. Strong background in scalable backend services, RESTful APIs, and event-driven systems using Java, Spring Boot, Angular, and cloud-native technologies. Comfortable working in DevOps-aligned teams with CI/CD pipelines, Docker, Kubernetes, and production monitoring using Grafana and EFK.',
  lookingFor:
    'Backend software engineer (Java, Spring Boot, microservices) looking for a permanent, full-time role in New Zealand.',
  location: 'Auckland, New Zealand',
  workRights: 'Full work rights in New Zealand',
  links: [
    { label: 'GitHub', url: 'https://github.com/hansaniperera' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hansani-perera' },
  ] satisfies ProfileLink[],
};
