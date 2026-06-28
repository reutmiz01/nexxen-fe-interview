import type { Person, PersonFormData } from '@/types';

const BASE = '/api/people';

export async function getPeople(): Promise<Person[]> {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Failed to fetch people');
  return res.json();
}

export async function getPerson(id: string): Promise<Person> {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch person');
  return res.json();
}

export async function getTeam(managerId: string): Promise<Person[]> {
  const res = await fetch(`${BASE}/${managerId}/team`);
  if (!res.ok) throw new Error('Failed to fetch team');
  return res.json();
}

export async function createPerson(data: PersonFormData): Promise<Person> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create person');
  return res.json();
}

export async function updatePerson(id: string, data: PersonFormData): Promise<Person> {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update person');
  return res.json();
}

export async function deletePerson(id: string): Promise<void> {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete person');
}
