import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import EventCalendar from '@/components/EventCalendar';

export default function TeacherPage() {
  return (
    <section className='flex flex-col md:flex-row gap-4 flex-1'>
      <div className='flex flex-col gap-4 md:w-2/3 bg-white p-4 rounded-xl shadow-sm border-gray-500'>
        <h1 className='font-semibold text-xl'>Teacher (John Doe)</h1>
        <BigCalendar />
      </div>
      <div className='flex flex-col w-full md:w-1/3 gap-4'>
        <Announcements />
      </div>
    </section>
  );
}
