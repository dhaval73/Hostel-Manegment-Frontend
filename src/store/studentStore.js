import { create } from 'zustand';

const studentStore = create((set, get) => ({
  students: [],
  setStudents: (students) => set(() => ({ students })),
  setStudent: (student) => set((state) => ({ students: [...state.students, student] })),
  getStudent: (id) => {
    const students = get().students;
    console.log("All students:", students); // Log all students to check data
    const student = students.find((s) => String(s._id) === id);
    console.log("Found student:", student); // Log found student
    return student;
  },
  updateStudent: (id, updatedData) => {
    const students = get().students;
    const index = students.findIndex((s) => String(s._id) === id);
    
    if (index !== -1) {
      const updatedStudents = [...students];
      updatedStudents[index] = { ...updatedStudents[index], ...updatedData };
      set({ students: updatedStudents });
    }
  },
}));

export default studentStore;
