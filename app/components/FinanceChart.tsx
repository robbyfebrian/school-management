'use client';

import { EllipsisIcon } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
    {
        month: 'Jan',
        income: 12000,
        expense: 9000,
    },
    {
        month: 'Feb',
        income: 13500,
        expense: 9500,
    },
    {
        month: 'Mar',
        income: 12800,
        expense: 11000,
    },
    {
        month: 'Apr',
        income: 14500,
        expense: 10500,
    },
    {
        month: 'May',
        income: 13800,
        expense: 12000,
    },
    {
    month: 'Jun',
    income: 18000,
    expense: 12000,
  },
  {
    month: 'Jul',
    income: 17500,
    expense: 11500,
  },
];

export default function FinanceChart() {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Finance</h1>
        <EllipsisIcon size={20} className='cursor-pointer' color='gray' />
      </div>
      <div className='w-full h-full'>
        <ResponsiveContainer width='100%' height='90%'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray='3 3'
              stroke='#ddd'
            />
            <XAxis
              dataKey='month'
              style={{ fontSize: '12px' }}
              axisLine={false}
              tick={{ fill: '#d1d5db' }}
              tickLine={false}
              tickMargin={8}
            />
            <YAxis
              axisLine={false}
              style={{ fontSize: '12px' }}
              tick={{ fill: '#d1d5db' }}
              tickLine={false}
              tickMargin={8}
            />
            <Tooltip
              contentStyle={{ borderRadius: '8px', borderColor: 'lightgray' }}
            />
            <Legend
              verticalAlign='top'
              wrapperStyle={{ paddingTop: '8px', paddingBottom: '24px' }}
            />
            <Line
              type='monotone'
              dataKey='income'
              stroke='#dab2ff'
              strokeWidth={4}
            />
            <Line
              type='monotone'
              dataKey='expense'
              stroke='#8ec5ff'
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
