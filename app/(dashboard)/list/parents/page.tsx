import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { Parent } from '@/components/data-type/types';
import { parentsData, role } from '@/lib/data';
import {
  ArrowDownWideNarrowIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';

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
        <div className='flex gap-2 items-center justify-end mr-4'>
          {role === 'admin' && (
            <>
              <FormModal
                table='parent'
                type='update'
                data={item}
                icon='SquarePenIcon'
              />
              <FormModal
                table='parent'
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
            <FormModal type='create' icon='PlusIcon' table='parent' />
          )}
        </div>
      </div>
      <Table tableHeads={tableHeads} renderRow={renderRow} data={parentsData} />
      <Pagination />
    </section>
  );
}
