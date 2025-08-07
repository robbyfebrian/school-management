import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { Result } from '@/components/data-type/types';
import { resultsData, role } from '@/lib/data';
import { ArrowDownWideNarrowIcon, SlidersHorizontalIcon } from 'lucide-react';

const tableHeads = [
  {
    header: 'Subject Name',
    accessor: 'subjectname',
  },
  {
    header: 'Class',
    accessor: 'class',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Student',
    accessor: 'student',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Type',
    accessor: 'type',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Score',
    accessor: 'score',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function ResultListPage() {
  const renderRow = (item: Result) => (
    <tr
      className='border-b border-gray-200 even:bg-gray-50 odd:bg-white text-sm hover:bg-purple-50'
      key={item.id}
    >
      <td className='flex gap-2 items-center py-4'>
        <h3 className='text-sm font-semibold'>{item.subject}</h3>
      </td>
      <td>{item.student}</td>
      <td className='hidden md:table-cell'>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <td className='hidden md:table-cell'>{item.type}</td>
      <td className='hidden md:table-cell'>{item.score}</td>
      <td>
        <div className='flex gap-2 items-center justify-end mr-4'>
          {role === 'admin' && (
            <>
              <FormModal
                table='result'
                type='update'
                data={item}
                icon='SquarePenIcon'
              />
              <FormModal
                table='result'
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
        <h1 className='font-semibold text-xl'>All Results</h1>
        <div className='flex items-center gap-2'>
          <TableSearch />
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <SlidersHorizontalIcon size={16} />
          </div>
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <ArrowDownWideNarrowIcon size={16} />
          </div>
          {role === 'admin' && (
            <FormModal type='create' icon='PlusIcon' table='result' />
          )}
        </div>
      </div>
      <Table tableHeads={tableHeads} renderRow={renderRow} data={resultsData} />
      <Pagination />
    </section>
  );
}
