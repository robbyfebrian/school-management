import Pagination from '@/app/components/Pagination';
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch';
import { Class } from '@/app/components/data-type/Class';
import { classesData, role } from '@/lib/data';
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
    header: 'Class Name',
    accessor: 'classname',
  },
  {
    header: 'Capacity',
    accessor: 'capacity',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Grade',
    accessor: 'grade',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Supervisor',
    accessor: 'supervisor',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function ClassListPage() {
  const renderRow = (item: Class) => (
    <tr
      className='border-b border-gray-200 even:bg-gray-50 odd:bg-white text-sm hover:bg-purple-50'
      key={item.id}
    >
      <td className='flex gap-2 items-center py-4'>

          <h3 className='text-sm font-semibold'>{item.name}</h3>

      </td>
      <td className='hidden md:table-cell'>{item.capacity}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.supervisor}</td>
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
      <Table tableHeads={tableHeads} renderRow={renderRow} data={classesData} />
      <Pagination />
    </section>
  );
}
