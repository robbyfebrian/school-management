import { EllipsisIcon } from 'lucide-react';
import { UserCardProps } from './component-type/UserCardProps';

export default async function UserCard({ type }: UserCardProps) {
  return (
    <div className='p-4 rounded-xl shadow-sm border-gray-500 odd:bg-purple-300 even:bg-yellow-300 flex-1 min-w-[130px]'>
      <div className='flex items-center justify-between'>
        <span className='text-xs text-gray-700 py-1 px-2 rounded-full bg-white'>
          2024/25
        </span>
        <EllipsisIcon size={20} className='cursor-pointer' color='white' />
      </div>
      <h1 className='text-2xl font-semibold mt-4 mb-2'>1,234</h1>
      <h2 className='text-sm text-gray-500'>{type}</h2>
    </div>
  );
}
