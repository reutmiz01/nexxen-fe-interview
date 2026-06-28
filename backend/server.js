const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());

function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET /api/people
app.get('/api/people', (req, res) => {
  const { people } = readData();
  res.json(people);
});

// GET /api/people/:id
app.get('/api/people/:id', (req, res) => {
  const { people } = readData();
  const person = people.find((p) => p.id === req.params.id);
  if (!person) return res.status(404).json({ error: 'Person not found' });
  res.json(person);
});

// GET /api/people/:id/team
app.get('/api/people/:id/team', (req, res) => {
  const { people } = readData();
  const manager = people.find((p) => p.id === req.params.id);
  if (!manager) return res.status(404).json({ error: 'Person not found' });
  if (manager.role !== 'manager') return res.status(400).json({ error: 'Person is not a manager' });
  const team = people.filter((p) => p.managerId === req.params.id);
  res.json(team);
});

// POST /api/people
app.post('/api/people', (req, res) => {
  const { firstName, lastName, email, role, managerId } = req.body;
  if (!firstName || !lastName || !email || !role) {
    return res.status(400).json({ error: 'firstName, lastName, email, and role are required' });
  }
  const data = readData();
  const newPerson = { id: uuidv4(), firstName, lastName, email, role };
  if (role === 'employee' && managerId) newPerson.managerId = managerId;
  data.people.push(newPerson);
  writeData(data);
  res.status(201).json(newPerson);
});

// PUT /api/people/:id
app.put('/api/people/:id', (req, res) => {
  const data = readData();
  const index = data.people.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Person not found' });
  const { firstName, lastName, email, role, managerId } = req.body;
  const updated = { ...data.people[index], firstName, lastName, email, role };
  if (role === 'employee' && managerId) {
    updated.managerId = managerId;
  } else {
    delete updated.managerId;
  }
  data.people[index] = updated;
  writeData(data);
  res.json(updated);
});

// DELETE /api/people/:id
app.delete('/api/people/:id', (req, res) => {
  const data = readData();
  const index = data.people.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Person not found' });
  data.people.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
