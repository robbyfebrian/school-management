import Announcements from '@/components/Announcements';
import AttendanceChart from '@/components/AttandanceChart';
import CountChart from '@/components/CountChart';
import EventCalendar from '@/components/EventCalendar';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';

export default function AdminPage() {
  return (
    <section className='flex flex-col md:flex-row gap-4'>
      <div className='flex flex-col gap-4 w-full md:w-2/3'>
        <div className='flex gap-4'>
          <UserCard type='students' />
          <UserCard type='teachers' />
          <UserCard type='parents' />
          <UserCard type='staffs' />
        </div>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='w-full lg:w-1/3 h-96 bg-white p-4 rounded-xl shadow-sm border-gray-500'>
            <CountChart />
          </div>
          <div className='w-full lg:w-2/3 h-96 bg-white p-4 rounded-xl shadow-sm border-gray-500'>
            <AttendanceChart />
          </div>
        </div>
        <div className='flex h-96 bg-white w-full p-4 rounded-xl shadow-sm border-gray-500'>
          <FinanceChart />
        </div>
      </div>
      <div className='flex flex-col w-full md:w-1/3 gap-4'>
        <EventCalendar />
        <Announcements />
      </div>
    </section>
  );
}
