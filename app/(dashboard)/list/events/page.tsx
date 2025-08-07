import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { Event } from '@/components/data-type/types';
import { eventsData, role } from '@/lib/data';
import { ArrowDownWideNarrowIcon, SlidersHorizontalIcon } from 'lucide-react';

const tableHeads = [
  {
    header: 'Title',
    accessor: 'title',
  },
  {
    header: 'Class',
    accessor: 'class',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Start Time',
    accessor: 'startTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'End Time',
    accessor: 'endTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function EventListPage() {
  const renderRow = (item: Event) => (
    <tr
      className='border-b border-gray-200 even:bg-gray-50 odd:bg-white text-sm hover:bg-purple-50'
      key={item.id}
    >
      <td className='flex gap-2 items-center py-4'>
        <h3 className='text-sm font-semibold'>{item.title}</h3>
      </td>
      <td className='hidden md:table-cell'>{item.class}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <td className='hidden md:table-cell'>{item.startTime}</td>
      <td className='hidden md:table-cell'>{item.endTime}</td>
      <td>
        <div className='flex gap-2 items-center justify-end mr-4'>
          {role === 'admin' && (
            <>
              <FormModal type='update' icon='SquarePenIcon' table='event' />
              <FormModal type='delete' icon='TrashIcon' table='event' />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <section className='flex flex-col flex-1 bg-white rounded-xl shadown-md border border-gray-200 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-xl'>All Events</h1>
        <div className='flex items-center gap-2'>
          <TableSearch />
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <SlidersHorizontalIcon size={16} />
          </div>
          <div className='bg-yellow-400 p-2 rounded-xl shadow-sm flex items-center justify-center'>
            <ArrowDownWideNarrowIcon size={16} />
          </div>
          {role === 'admin' && (
            <FormModal type='create' icon='PlusIcon' table='event' />
          )}
        </div>
      </div>
      <Table tableHeads={tableHeads} renderRow={renderRow} data={eventsData} />
      <Pagination />
    </section>
  );
}
