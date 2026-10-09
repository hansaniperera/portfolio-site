# Portfolio Site: Spec

## 1. Goals
- A public portfolio showing my backend engineering work to NZ employers.
- Hands-on practice building a real project with an AI coding agent.
- Deployed on AWS, with a repo that is itself part of the portfolio.

## 2. Scope (v1)
Pages:
- Home: short intro, role I'm looking for, links (GitHub, LinkedIn, email)
- Projects: list + detail page (problem, stack, my role, outcome, links)
- Experience: timeline of roles
- Blog/Notes: **deferred** (not in v1 so far): short posts, including "How I built this with an AI agent"
- Contact: form that stores the message and emails me

Out of scope for v1: user accounts, comments, analytics dashboards, multi-language.

## 3. Architecture
- Frontend: React (Vite), TypeScript, Tailwind. Static build.
- Backend: Spring Boot 4.1 (Java 21), Maven (wrapper), REST API, Flyway migrations.
- Database: PostgreSQL 17.
- Hosting: frontend on S3 + CloudFront; backend + Postgres via Docker Compose on one Lightsail instance; Route 53 for DNS; HTTPS everywhere.
- CI/CD: GitHub Actions (build, test, deploy on merge to main).

## 4. Data model
- project(id, slug, title, category, employer, role, summary, start_date, end_date, tech_stack text[], link_url, sort_order, published)
  - category is 'professional' or 'academic'; employer, role, end_date and link_url are nullable.
  - slug comes from the title: lowercase, hyphenated, unique.
  - Ordered professional first, then academic, each newest first.
- experience(id, company, role, location, start_date, end_date, responsibilities text[], achievements text[], tech_stack text[], sort_order)
- post(id, slug, title, body_markdown, published_at, published): **deferred** with the blog.
- contact_message(id, name, email, message, created_at)

Dates are stored as the first of the month and returned by the API as "YYYY-MM" (e.g. "2025-09"). A null end_date means "present".

## 5. API (v1)
- GET /api/projects, GET /api/projects/{slug}
- GET /api/experience
- GET /api/posts, GET /api/posts/{slug}: **deferred** with the blog
- POST /api/contact (validated, rate limited)
- GET /actuator/health
Admin content is edited via migrations/seed data in v1 (no admin UI).

## 6. Non-functional requirements
- Tests: unit + integration tests (Testcontainers for Postgres); CI must pass before merge.
- Security: no secrets in the repo, input validation, rate limiting on contact, CORS locked to my domain, security headers.
- Performance: pages load fast on mobile; static assets cached via CloudFront.
- Accessibility: semantic HTML, keyboard navigable, good contrast.
- Observability: structured logs, health endpoint, basic uptime check.

## 7. Milestones
1. Repo, CLAUDE.md, spec, frontend skeleton
2. Backend API + DB + tests, running locally in Docker
3. Frontend wired to API
4. CI/CD + AWS deployment + domain + HTTPS
   - CloudFront must return index.html for 403/404 so client-side routes (deep links) work.
5. Content, polish, "How I built this" write-up

## 8. Working rules for the AI agent
- Plan first, code after I approve.
- One small feature per branch/PR, with tests.
- Explain non-obvious changes; don't add features or dependencies I didn't ask for.
- Never commit secrets; flag anything security-sensitive.

## 9. Open decisions
- Frontend framework: **Decided:** Vite + React + TypeScript + Tailwind
- Contact email delivery: AWS SES or a third-party service
- Blog: **Deferred** (not in Milestone 2; revisit later)
- Backend stack: **Decided:** Spring Boot 4.1, Java 21, Maven, PostgreSQL 17
- Domain name