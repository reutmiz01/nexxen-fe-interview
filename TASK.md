# Task: People Management Page

## Overview

You are given a working Vue 3 frontend scaffold and a running Node.js backend with mock data.

Your task is to implement the **People Management page** inside `frontend/src/views/PeopleView.vue`.

Open `design/mockup.html` in a browser to see exactly what the UI should look like. Click the buttons at the top to navigate between the three screens.

---

## What's already built for you

### `src/components/PeopleTable.vue`

The table shell is pre-built. It renders the card, header, "Add Person" button, and column headers. It accepts a `people` prop and exposes a `#row` scoped slot for you to fill in each row.

```vue
<PeopleTable :people="people" @add="openAddModal">
  <template #row="{ person }">
    <!-- your <tr> goes here -->
  </template>
</PeopleTable>
```

`PeopleView.vue` already imports `PeopleTable`, fetches the people list on mount, and wires the `@add` handler stub. You continue from there.

---

## What to implement

### 1 — Table row (`#row` slot in `PeopleView.vue`)

Implement the `<tr>` for each person inside the `#row` slot.

**Columns:** ID · Name (with circular photo) · Email · Role badge

**Behaviour:**
- Rows where `role === 'manager'` are clickable → opens the Team Modal
- Each row has **Edit** and **Delete** action buttons
- See `design/mockup.html` Screen 1 for the visual reference

---

### 2 — Team Modal

Opens when a manager row is clicked.

**Shows:**
- Title: `{Manager Name}'s Team`
- Subtitle: number of members
- List of the manager's employees (photo, full name, email)
- A **Close** button

Use `getTeam(managerId)` from `src/api/people.ts` to fetch the team.

---

### 3 — Add / Edit Form Modal

Used for both creating and editing a person.

**Fields:** First Name · Last Name · Email · Role (`employee` | `manager`) · Manager dropdown (only when role is `employee`)

**Behaviour:**
- Save → `createPerson(data)` or `updatePerson(id, data)`, then refresh the list
- Cancel → close without saving

---

### 4 — Delete

Clicking **Delete** on a row calls `deletePerson(id)` and removes the person from the list immediately.

---

## API reference

All functions are in `src/api/people.ts` — import and call directly.

| Function | Description |
|---|---|
| `getPeople()` | Returns all people |
| `getTeam(managerId)` | Returns employees managed by this manager |
| `createPerson(data)` | Creates a new person |
| `updatePerson(id, data)` | Updates a person |
| `deletePerson(id)` | Deletes a person |

### Person type (`src/types/index.ts`)

```typescript
interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'employee' | 'manager';
  managerId?: string;
  photo?: string;
}
```

---

## API endpoints

The Vite dev server proxies `/api` to `http://localhost:3000` automatically.

```
GET    /api/people
GET    /api/people/:id/team
POST   /api/people
PUT    /api/people/:id
DELETE /api/people/:id
```

---

## Notes

- Use Vue 3 Composition API (`<script setup lang="ts">`)
- You are free to create additional components (`TeamModal.vue`, `PersonFormModal.vue`, etc.)
- Pinia is available but not required
- Avoid `any` — keep everything typed
- Match the design in `design/mockup.html` as closely as you can
