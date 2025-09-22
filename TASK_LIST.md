# Guestbook Project: Task List

Based on the PRD, here is the initial breakdown of tasks for the team.

## Phase 1: Project Scaffolding & Database Setup

- [ ] **Cap:** Define the overall project directory structure (e.g., monorepo with `client` and `server` packages).
- [ ] **Schema:** Design the PostgreSQL schema for the `entries` table. It should include columns for `id`, `name`, `message`, and `created_at`. Deliver a SQL script for table creation.
- [ ] **Nexus:** Initialize the Node.js/Express backend application in the `server` directory. Set up basic server configuration and a `package.json`.
- [ ] **Stella:** Initialize the React/Vite frontend application in the `client` directory.

## Phase 2: Backend API Development

- [ ] **Nexus:** Implement the database connection logic to connect the Express server to the PostgreSQL database.
- [ ] **Nexus:** Create the API endpoint `GET /api/entries` to fetch all guestbook entries. Ensure they are ordered by `created_at` in descending order.
- [ ] **Nexus:** Create the API endpoint `POST /api/entries` to create a new guestbook entry.
- [ ] **Sentinel:** Add input validation for the `POST /api/entries` endpoint. Ensure `name` and `message` are non-empty strings.

## Phase 3: Frontend UI Development

- [ ] **Stella:** Create the main application layout component.
- [ ] **Stella:** Develop the `GuestbookForm.jsx` component, including state management for the input fields.
- [ ] **Stella:** Develop the `MessageList.jsx` component to render a list of messages passed to it as props.
- [ ] **Stella:** Implement the client-side logic to fetch all messages from `GET /api/entries` on component mount.
- [ ] **Stella:** Implement the form submission logic to send data to `POST /api/entries` and automatically refresh the message list upon a successful response.

## Phase 4: Integration & Review

- [ ] **Cap:** Review all pull requests and integrate the frontend and backend components.