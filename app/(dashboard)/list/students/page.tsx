import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { Student } from '@/components/data-type/types';
import { role, studentsData } from '@/lib/data';
import {
  ArrowDownWideNarrowIcon,
  EyeIcon,
  PlusIcon,
  SlidersHorizontalIcon,
  TrashIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const tableHeads = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Student ID',
    accessor: 'studentId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Grade',
    accessor: 'grade',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function StudentListPage() {
  const renderRow = (item: Student) => (
    <tr
      className='border-b border-gray-200 even:bg-gray-50 odd:bg-white text-sm hover:bg-purple-50'
      key={item.id}
    >
      <td className='flex gap-2 items-center py-4'>
        <Image
          alt='student-image'
          src={item.photo}
          width={20}
          height={20}
          className='rounded-full object-cover w-10 h-10 md:hidden xl:block ml-2'
        />
        <div className='flex flex-col'>
          <h3 className='text-sm font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item.class}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.studentId}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
        <div className='flex gap-2 items-center justify-end mr-4'>
          <Link
            href={`/list/students/${item.id}`}
            className='flex items-center justify-center bg-blue-300 rounded-full p-2'
          >
            <EyeIcon size={16} color='white' />
          </Link>
          {role === 'admin' && (
            <FormModal
              type='delete'
              table='student'
              icon='TrashIcon'
              id={item.id}
            />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <section className='flex flex-col flex-1 bg-white rounded-xl shadown-md border border-gray-200 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-xl'>All Students</h1>
        <div className='flex items-center gap-2'>
          <TableSearch />
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <SlidersHorizontalIcon size={16} />
          </div>
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <ArrowDownWideNarrowIcon size={16} />
          </div>
          {role === 'admin' && (
            <FormModal type='create' table='student' icon='PlusIcon' />
          )}
        </div>
      </div>
      <Table
        tableHeads={tableHeads}
        renderRow={renderRow}
        data={studentsData}
      />
      <Pagination />
    </section>
  );
}
