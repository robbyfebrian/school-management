import {
  MegaphoneIcon,
  MessageCircleMoreIcon,
  Search,
  User,
} from 'lucide-react';
import GlobalSearch from './GlobalSearch';

export default async function Navbar() {
  return (
    <div className='flex items-center justify-end md:justify-between'>
      <GlobalSearch />
      <nav className='flex items-center justify-center gap-6'>
        <div className='flex items-center gap-4'>
          <div className='bg-white rounded-2xl shadow-sm p-3 flex items-center gap-2'>
            <MessageCircleMoreIcon
              size={24}
              className='text-gray-500 cursor-pointer'
            />
          </div>
          <div className='relative bg-white rounded-2xl shadow-sm p-3 flex items-center gap-2'>
            <MegaphoneIcon size={24} className='text-gray-500 cursor-pointer' />
            <div className='absolute -top-2 -right-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full w-5 h-5 p-2 flex items-center justify-center'>
              <span className='font-xs font-light '>1</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex flex-col items-end'>
            <span className='text-gray-500 text-sm font-bold'>John Doe</span>
            <span className='text-gray-400 text-xs'>Student</span>
          </div>
          <div className='bg-white rounded-2xl shadow-sm p-3 flex items-center justify-center'>
            <User size={24} className='text-gray-500 cursor-pointer' />
          </div>
        </div>
      </nav>
    </div>
  );
}
