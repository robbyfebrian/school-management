'use client';

import { EllipsisIcon } from 'lucide-react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor sit amet',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Lorem Ipsum Dolor sit amet',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Lorem Ipsum Dolor sit amet',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.',
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='flex flex-col gap-4 bg-white p-4 rounded-xl border-gray-500 shadow-sm'>
      <Calendar onChange={onChange} value={value} locale='id-ID' />
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl'>Events</h1>
        <EllipsisIcon size={20} className='cursor-pointer' color='gray' />
      </div>
      <div className='flex flex-col gap-4'>
        {events.map((event) => (
          <div className='p-4 border-t-2 odd:border-purple-200 even:border-blue-200 shadow-sm rounded-md' key={event.id}>
            <div className='flex items-center justify-between'>
              <h1 className='font-bold text-sm tracking-tight'>{event.title}</h1>
              <span className='text-xs text-gray-300'>{event.time}</span>
            </div>
            <span className='text-xs text-gray-500'>{event.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
