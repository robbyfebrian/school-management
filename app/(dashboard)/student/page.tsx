import Announcements from '@/app/components/Announcements';
import BigCalendar from '@/app/components/BigCalendar';
import EventCalendar from '@/app/components/EventCalendar';

export default function StudentPage() {
  return (
    <section className='flex flex-col md:flex-row gap-4'>
      <div className='flex flex-col gap-4 md:w-2/3 bg-white p-4 rounded-xl shadow-sm border-gray-500'>
        <h1 className='font-semibold text-xl'>Student (4A)</h1>
        <BigCalendar />
      </div>
      <div className='flex flex-col w-full md:w-1/3 gap-4'>
        <EventCalendar />
        <Announcements />
      </div>
    </section>
  );
}
