export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'employee' | 'manager';
  managerId?: string;
}

export type PersonFormData = Omit<Person, 'id'>;
