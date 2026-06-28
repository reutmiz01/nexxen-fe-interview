<template>
  <div class="people-table-card">
    <div class="people-table-header">
      <h2 class="people-table-title">
        People
        <span class="people-table-count">{{ people.length }}</span>
      </h2>
      <button class="btn-add" @click="$emit('add')">+ Add Person</button>
    </div>

    <div class="people-table-wrap">
      <table class="people-table">
        <thead>
          <tr>
            <th style="width: 56px">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th style="width: 130px">Actions</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="person in people" :key="person.id">
            <slot name="row" :person="person" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Person } from '@/types';

defineProps<{
  people: Person[];
}>();

defineEmits<{
  add: [];
}>();
</script>

<style scoped>
.people-table-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.people-table-header {
  display: flex;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.people-table-title {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.people-table-count {
  background: #eef2ff;
  color: #3b5bdb;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
}

.btn-add {
  margin-left: auto;
  padding: 7px 16px;
  background: #3b5bdb;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.btn-add:hover {
  background: #2f4ac4;
}

.people-table-wrap {
  overflow-x: auto;
}

.people-table {
  width: 100%;
  border-collapse: collapse;
}

.people-table thead th {
  padding: 10px 16px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: #f7f8fa;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}

/* Row styles available for the candidate to use via :deep() or global classes */
:deep(tbody tr) {
  border-bottom: 1px solid #e5e7eb;
  transition: background 0.1s;
}

:deep(tbody tr:last-child) {
  border-bottom: none;
}

:deep(tbody tr:hover) {
  background: #f7f8fa;
}

:deep(tbody td) {
  padding: 10px 16px;
  font-size: 13px;
  vertical-align: middle;
}
</style>
