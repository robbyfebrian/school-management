'use client';

import { EllipsisIcon, Users2 } from 'lucide-react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Total',
    count: 105,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#8ec5ff',
  },
  {
    name: 'Girls',
    count: 52,
    fill: '#ffdf20',
  },
];

export default function CountChart() {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Students</h1>
        <EllipsisIcon size={20} className='cursor-pointer' color='gray' />
      </div>
      <div className='w-full h-[75%] relative'>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey='count' />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-center'>
          <Users2 size={28} color='#8ec5ff' />
          <Users2 size={28} color='#ffdf20' />
        </div>
      </div>
      <div className='flex justify-center gap-8'>
        <div className='flex flex-col'>
          <div className='rounded-full bg-blue-300 size-4' />
          <h3 className='font-bold'>1,234</h3>
          <p className='text-xs text-gray-500'>Boys (45%)</p>
        </div>
        <div className='flex flex-col'>
          <div className='rounded-full bg-yellow-300 size-4' />
          <h3 className='font-bold'>1,234</h3>
          <p className='text-sm text-gray-500'>Boys (45%)</p>
        </div>
      </div>
    </div>
  );
}
