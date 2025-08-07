'use client';

import { EllipsisIcon } from 'lucide-react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Good', value: 82, fill: '#8ec5ff' },
  { name: 'Bad', value: 8, fill: '#ffdf20' },
];

export default function Performance() {
  return (
    <div className='relative w-full h-80 bg-white p-4 rounded-md border-gray-500 shadow-sm'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Students</h1>
        <EllipsisIcon size={20} className='cursor-pointer' color='gray' />
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey='value'
            startAngle={180}
            endAngle={0}
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={70}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-3xl font-bold'>9.2</h1>
        <p className='text-xs text-gray-300'>of 10 max LTS</p>
      </div>
      <h2 className='text-center font-semibold w-max absolute left-1/2 top-4/5 transform -translate-x-1/2 -translate-y-4/5'>1st Semester - 2nd Semester</h2>
    </div>
  );
}
