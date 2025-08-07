import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { Lesson } from '@/components/data-type/types';
import { lessonsData, role } from '@/lib/data';
import {
  ArrowDownWideNarrowIcon,
  EyeIcon,
  PlusIcon,
  SlidersHorizontalIcon,
  TrashIcon,
} from 'lucide-react';
import Link from 'next/link';

const tableHeads = [
  {
    header: 'Subjects',
    accessor: 'subject',
  },
  {
    header: 'Class',
    accessor: 'class',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function LessonListPage() {
  const renderRow = (item: Lesson) => (
    <tr
      className='border-b border-gray-200 even:bg-gray-50 odd:bg-white text-sm hover:bg-purple-50'
      key={item.id}
    >
      <td className='flex gap-2 items-center py-4'>
        <h3 className='text-sm font-semibold'>{item.subject}</h3>
      </td>
      <td className='hidden md:table-cell'>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td>
        <div className='flex gap-2 items-center justify-end mr-4'>
          {role === 'admin' && (
            <>
              <FormModal
                table='lesson'
                type='update'
                data={item}
                icon='SquarePenIcon'
              />
              <FormModal
                table='lesson'
                type='delete'
                id={item.id}
                icon='TrashIcon'
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <section className='flex flex-col flex-1 bg-white rounded-xl shadown-md border border-gray-200 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-xl'>All Lessons</h1>
        <div className='flex items-center gap-2'>
          <TableSearch />
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <SlidersHorizontalIcon size={16} />
          </div>
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <ArrowDownWideNarrowIcon size={16} />
          </div>
          {role === 'admin' && (
            <FormModal type='create' icon='PlusIcon' table='lesson' />
          )}
        </div>
      </div>
      <Table tableHeads={tableHeads} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </section>
  );
}
