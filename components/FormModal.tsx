'use client';

import * as LucideIcons from 'lucide-react';
import { FormModalProps } from './component-type/FormModalProps';
import { useState } from 'react';
import TeacherForm from './form/TeacherForm';
import StudentForm from './form/StudentForm';

const forms: {
  [key: string]: (type: 'create' | 'update', data: any) => React.JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

export default function FormModal({
  table,
  type,
  icon,
  data,
  id,
}: FormModalProps) {
  const size = type === 'create' ? 'rounded-xl' : 'rounded-full';
  const bgColor =
    type === 'create'
      ? 'bg-yellow-400'
      : type === 'update'
      ? 'bg-purple-300'
      : 'bg-red-300';
  const iconColor = type === 'create' ? 'black' : 'white';

  const LucideIcon = (LucideIcons as any)[icon] || LucideIcons.HelpCircleIcon;

  const [open, setOpen] = useState(false);

  const Form = () => {
    if (type === 'delete' && id) {
      return (
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-semibold text-lg '>Are you sure to delete this?</h2>
          <p className='text-gray-500'>
            the {table} data you selected will be lost.
          </p>
          <button className='bg-red-500 w-fit px-3 py-1 rounded-sm mt-2 flex items-center gap-2'>
            <LucideIcon size={16} color={iconColor} />
            <span className='capitalize text-white font-bold'>{type}</span>
          </button>
        </div>
      );
    } else if (type === 'create' || type === 'update') {
      return forms[table](type, data);
    } else {
      return null;
    }
  };

  return (
    <>
      <button
        className={`flex items-center justify-center ${bgColor} ${size} p-2`}
        onClick={() => setOpen(true)}
      >
        <LucideIcon size={16} color={iconColor} />
      </button>
      {open && (
        <div className='absolute w-screen h-screen left-0 top-0 bg-black/40 z-20 flex items-center justify-center'>
          <div className='relative bg-white w-fit h-min p-5 rounded-lg opacity-100'>
            <LucideIcons.XCircleIcon
              size={24}
              className='absolute -top-6 -right-6'
              color='white'
              onClick={() => {
                setOpen(false);
              }}
            />
            <Form />
          </div>
        </div>
      )}
    </>
  );
}
