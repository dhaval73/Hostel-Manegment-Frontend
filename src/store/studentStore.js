import { create } from 'zustand';

const studentStore = create((set) => ({
  students: [], 
  setStudents: (students) => set(() => ({ students })),
  setStudent: (student) => set((state) => ({ students: [...state.students, student] })),
}));

export default studentStore;
