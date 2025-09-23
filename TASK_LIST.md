# Guestbook Project: Final Task List

This document reflects the full scope of work completed for the project's first version, including initial plans and subsequent refactors.

## Phase 1: Project Scaffolding & Database Setup
- [x] **Cap:** Define the overall project directory structure (`client` and `server`).
- [x] **Cap:** Establish version control with Git.
- [x] **Cap:** Externalize agent personas into a modular `team/` directory ("Personas-as-Code").
- [x] **Cap:** Standardize the project license as ISC.
- [x] **Cap:** Implement a "Golden Rule" for all agents to produce clean, production-ready code.
- [x] **Nexus:** Initialize the Node.js/Express backend application.
- [x] **Stella:** Initialize the React/Vite frontend application.
- [x] **Schema:** Design the initial PostgreSQL schema for the `entries` table.
- [x] **Schema:** Refactor the database strategy to use schemas for multi-project isolation (`guestbook.entries`).
- [x] **Schema:** Set up the local database (`rudil24_db`) and run the initial migration script.

## Phase 2: Backend API Development
- [x] **Nexus:** Standardize on modern ES Module syntax (`import`/`export`).
- [x] **Nexus:** Implement the database connection logic using a robust `DATABASE_URL`.
- [x] **Nexus:** Create the API endpoint `GET /api/entries`.
- [x] **Nexus:** Create the API endpoint `POST /api/entries`.
- [x] **Sentinel:** Add input validation for the `POST /api/entries` endpoint.
- [x] **Sentinel:** Implement server-side rate limiting to prevent spam.
- [x] **Sentinel:** Implement backend verification for Google reCAPTCHA.

## Phase 3: Frontend UI Development
- [x] **Stella:** Create the main application layout component.
- [x] **Stella:** Develop the `GuestbookForm.jsx`, `MessageList.jsx`, and `Footer.jsx` components.
- [x] **Stella:** Implement logic to fetch entries from the API and submit new entries.
- [x] **Stella:** Implement client-side logic for Google reCAPTCHA.
- [x] **Stella:** Update the page title and create a custom favicon.
- [x] **Stella:** Perform a full visual refactor (layout, colors, typography).
- [x] **Stella:** Implement user-facing error handling for API calls.

## Phase 4: Integration & Review
- [x] **Cap:** Conduct a final code review of the entire project.
- [x] **Nexus:** Refactor the server from a single file into a scalable structure (routes, controllers, db) based on code review.
- [x] **Sentinel:** Add logic to bypass reCAPTCHA when `NODE_ENV` is 'test' for integration testing.
- [x] **Stella:** Conditionally render the reCAPTCHA component to hide it during tests.

## Phase 5: Local Test & QA
- [x] **Vera:** Install and configure the Playwright end-to-end testing framework.
- [x] **Vera:** Set up a GitHub Actions workflow for automated testing.
- [x] **Vera:** Write the initial e2e test script for the core user flow.
- [x] **Nexus:** Create a dedicated testing endpoint `POST /api/testing/reset` for test isolation.
- [x] **Vera:** Refactor the test script to use a `beforeEach` hook for test isolation.
- [x] **Team:** Conduct extensive debugging of the Playwright test environment.
- [x] **Team:** Conduct final manual testing of all user flows.

## Phase 6: Deploy on Render.com
- [ ] **Vera:** Create the `render.yaml` file for deployment.
- [ ] **Team:** Create the new application and database services on Render.com.
- [ ] **Team:** Configure environment variables (DATABASE_URL, reCAPTCHA keys) in Render.
- [ ] **Team:** Push to GitHub to trigger the first deployment.
- [ ] **Team:** Conduct post-deployment manual testing on the live URL.