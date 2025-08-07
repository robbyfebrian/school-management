'use client';

import { EllipsisIcon } from 'lucide-react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    day: 'Monday',
    present: 60,
    absent: 40,
  },
  {
    day: 'Tuesday',
    present: 70,
    absent: 60,
  },
  {
    day: 'Wednesday',
    present: 65,
    absent: 55,
  },
  {
    day: 'Thursday',
    present: 73,
    absent: 45,
  },
  {
    day: 'Friday',
    present: 50,
    absent: 20,
  },
];

export default function AttendanceChart() {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Attendance</h1>
        <EllipsisIcon size={20} className='cursor-pointer' color='gray' />
      </div>
      <div className='w-full h-full'>
        <ResponsiveContainer width='100%' height='90%'>
          <BarChart width={500} height={300} data={data} barSize={16}>
            <CartesianGrid
              strokeDasharray='3 3'
              vertical={false}
              stroke='#ddd'
            />
            <XAxis
              dataKey='day'
              style={{ fontSize: '12px' }}
              axisLine={false}
              tick={{ fill: '#d1d5db' }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: '#d1d5db' }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: '8px', borderColor: 'lightgray' }}
            />
            <Bar
              dataKey='absent'
              fill='#8ec5ff'
              radius={[10, 10, 0, 0]}
              legendType='circle'
            />
            <Bar
              dataKey='present'
              fill='#ffdf20'
              radius={[10, 10, 0, 0]}
              legendType='circle'
            />
            <Legend
              align='left'
              verticalAlign='top'
              wrapperStyle={{ paddingTop: '8px', paddingBottom: '24px' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
