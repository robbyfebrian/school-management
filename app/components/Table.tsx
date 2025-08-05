import { TableProps } from './component-type/TableProps';

export default function Table({ tableHeads, renderRow, data }: TableProps) {
  return (
    <table className='min-w-full my-4'>
      <thead className='border-none'>
        <tr className='text-left text-gray-500 font-semibold'>
          {tableHeads.map((th) => (
            <th key={th.accessor} className={th.className}>
              {th.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
}
