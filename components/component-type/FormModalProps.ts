export type FormModalProps = {
  table:
    | 'teacher'
    | 'student'
    | 'parent'
    | 'subject'
    | 'class'
    | 'lesson'
    | 'exam'
    | 'assignment'
    | 'result'
    | 'attendance'
    | 'event'
    | 'announcement';
  type: 'create' | 'update' | 'delete';
  icon: string
  data?: any;
  id?: number | string;
};
