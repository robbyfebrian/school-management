export type Announcement = {
  id: string;
  title: string;
  class: string;
  date: string;
};

export type Event = {
  id: string;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

export type Result = {
  id: string;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: 'exam' | 'assignment';
  score: number;
};

export type Lesson = {
  id: string;
  subject: string;
  class: string;
  teacher: string;
};

export type Assignment = {
  id: string;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

export type Exam = {
  id: string;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

export type Teacher = {
  id: string;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

export type Subject = {
  id: string;
  name: string;
  teachers: string[];
};

export type Class = {
  id: string;
  name: string;
  capacity: string;
  grade: string;
  supervisor: string;
};

export type Parent = {
  id: string;
  name: string;
  students: string[];
  email?: string;
  phone: string;
  address: string;
};

export type Student = {
  id: string;
  studentId: string;
  name: string;
  class: string;
  photo: string;
  phone: string;
  grade: string;
  address: string;
};
