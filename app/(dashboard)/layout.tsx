import { BadgeIcon } from 'lucide-react';
import Link from 'next/link';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-screen flex border-b border-t border-gray-200'>
      <aside className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-scroll border-r border-gray-200 shadow-2xl'>
        <Link href='/' className='flex gap-1 items-center justify-center border-0 md:border-1 p-0 md:px-1 md:py-1.5 border-yellow-400 rounded-lg mx-auto md:mx-0'>
          <BadgeIcon size={28} className='text-yellow-400' />
        <span className='hidden lg:block text-yellow-400 font-semibold text-lg'>Schooler.</span>
        </Link>
        <Menu />
      </aside>
      <main className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col p-4 gap-4'>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
