import { SearchIcon } from "lucide-react";

export default async function TableSearch() {
  return (
    <div className='hidden md:flex w-fit px-2 py-1 rounded-2xl shadow-sm border border-gray-200 items-center gap-2 mr-2'>
      <SearchIcon size={16} className='text-gray-400' />
      <input
        type='text'
        className='text-gray-400 text-sm'
        placeholder='Search from table...'
      />
    </div>
  );
}
