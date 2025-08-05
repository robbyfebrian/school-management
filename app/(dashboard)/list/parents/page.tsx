import Pagination from '@/app/components/Pagination';
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch';
import { Parent } from '@/app/components/data-type/Parent';
import { parentsData, role, studentsData } from '@/lib/data';
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
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Students',
    accessor: 'students',
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

export default function ParentListPage() {
  const renderRow = (item: Parent) => (
    <tr
      className='border-b border-gray-200 even:bg-gray-50 odd:bg-white text-sm hover:bg-purple-50'
      key={item.id}
    >
      <td className='flex gap-2 items-center py-4'>
        <div className='flex flex-col'>
          <h3 className='text-sm font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.students.join(', ')}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
        <div className='flex gap-2 items-center'>
          <Link
            href={`/list/parents/${item.id}`}
            className='flex items-center justify-center bg-blue-400 rounded-full p-2'
          >
            <EyeIcon size={16} color='white' />
          </Link>
          {role === 'admin' && (
            <div className='flex items-center justify-center bg-yellow-400 rounded-full p-2'>
              <TrashIcon size={16} color='white' />
            </div>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <section className='flex flex-col flex-1 bg-white rounded-xl shadown-md border border-gray-200 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-xl'>All Teachers</h1>
        <div className='flex items-center gap-2'>
          <TableSearch />
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <SlidersHorizontalIcon size={16} />
          </div>
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <ArrowDownWideNarrowIcon size={16} />
          </div>
          {role === 'admin' && (
            <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
              <PlusIcon size={16} />
            </div>
          )}
        </div>
      </div>
      <Table
        tableHeads={tableHeads}
        renderRow={renderRow}
        data={parentsData}
      />
      <Pagination />
    </section>
  );
}
