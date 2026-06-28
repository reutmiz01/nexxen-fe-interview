<template>
  <div class="people-view">
    <h1>People</h1>
    <p class="hint">
      👋 This is your starting point. See <strong>TASK.md</strong> for what to implement here.
    </p>
  </div>
</template>

<script setup lang="ts">
// TODO: Implement the People Management page.
// See TASK.md for full requirements and design/mockup.html for the visual reference.
//
// Available API functions (already implemented in src/api/people.ts):
//   getPeople()           → Person[]
//   getTeam(managerId)    → Person[]
//   createPerson(data)    → Person
//   updatePerson(id,data) → Person
//   deletePerson(id)      → void
//
// Type definitions are in src/types/index.ts
</script>

<style scoped>
.people-view h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.hint {
  color: #7f8c8d;
  font-size: 14px;
}
</style>
