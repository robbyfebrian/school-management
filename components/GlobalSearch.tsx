import { SearchIcon } from 'lucide-react';

export default async function GlobalSearch() {
  return (
    <div className='hidden md:flex min-w-lg rounded-3xl shadow-sm py-2 bg-white px-3 border border-gray-200 items-center gap-2'>
      <SearchIcon size={20} className='text-gray-400' />
      <input type='text' className='text-gray-400' placeholder='Search...' />
    </div>
  );
}
