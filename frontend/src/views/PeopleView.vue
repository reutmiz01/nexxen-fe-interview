<template>
  <div>
    <PeopleTable :people="people" @add="openAddModal">
      <template #row="{ person }">
        <!-- TODO: Implement the table row for each person.
             'person' is a Person object from src/types/index.ts

             Requirements:
             - Display: photo (circle), full name, email, role badge
             - If person.role === 'manager' → row is clickable, opens team modal
             - Edit button → opens edit form modal prefilled with this person
             - Delete button → deletes the person and refreshes the list

             See design/mockup.html (Screen 1) for the visual reference.
        -->
      </template>
    </PeopleTable>

    <!-- TODO: Add TeamModal and PersonFormModal components here -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PeopleTable from '@/components/PeopleTable.vue';
import { getPeople } from '@/api/people';
import type { Person } from '@/types';

const people = ref<Person[]>([]);

onMounted(async () => {
  people.value = await getPeople();
});

function openAddModal() {
  // TODO: open the Add Person form modal
}
</script>
