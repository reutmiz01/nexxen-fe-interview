# Task: People Management Page

## Overview

You are given a working Vue 3 frontend scaffold and a running Node.js backend with mock data.

Your task is to implement the **People Management page** inside `frontend/src/views/PeopleView.vue`.

Open `design/mockup.html` in a browser to see exactly what the UI should look like. Click the buttons at the top to navigate between the three screens.

---

## What to implement

### Screen 1 — People Table

Display a table of all people fetched from the API.

**Columns:** ID · Full Name · Email · Role

**Behaviour:**
- Rows where `role === 'manager'` are clickable (pointer cursor, visual indicator)
- Clicking a manager row opens the **Team Modal**
- Each row has **Edit** and **Delete** action buttons
- An **"Add Person"** button above the table opens the **Add/Edit Form Modal**

---

### Screen 2 — Team Modal

Opens when a manager row is clicked.

**Shows:**
- Modal title: `{Manager Name}'s Team`
- Subtitle: number of members
- List of employees whose `managerId` matches the clicked manager's `id`
- Each member shows: avatar initials · full name · email
- A **Close** button

---

### Screen 3 — Add / Edit Form Modal

Used for both creating a new person and editing an existing one.

**Fields:**
- First Name *(required)*
- Last Name *(required)*
- Email *(required)*
- Role — dropdown: `employee` | `manager`
- Manager — dropdown of all managers; only shown when role is `employee`

**Behaviour:**
- **Save** calls the appropriate API function (`createPerson` or `updatePerson`)
- **Cancel** closes the modal without saving
- After save, the table refreshes

---

### Delete

- Clicking **Delete** on a row removes the person via the API
- The table updates immediately after deletion

---

## API reference

All API functions are already implemented in `src/api/people.ts`. Import and call them directly.

| Function | Description |
|---|---|
| `getPeople()` | Returns all people |
| `getPerson(id)` | Returns a single person |
| `getTeam(managerId)` | Returns employees managed by this manager |
| `createPerson(data)` | Creates a new person, returns the created object |
| `updatePerson(id, data)` | Updates a person, returns the updated object |
| `deletePerson(id)` | Deletes a person |

### Person shape

```typescript
interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'employee' | 'manager';
  managerId?: string; // only present for employees
}
```

---

## API endpoints (for reference)

The backend runs on `http://localhost:3000`. The Vite dev server proxies `/api` automatically so you don't need to set the full URL.

```
GET    /api/people
GET    /api/people/:id
GET    /api/people/:id/team
POST   /api/people
PUT    /api/people/:id
DELETE /api/people/:id
```

---

## Notes

- Use Vue 3 Composition API (`<script setup lang="ts">`)
- You are free to create additional components (e.g. `TeamModal.vue`, `PersonFormModal.vue`)
- Pinia is available if you'd like a store, but it is not required
- Keep the code clean and typed — avoid `any`
- The design mockup is the visual reference; match it as closely as you can
