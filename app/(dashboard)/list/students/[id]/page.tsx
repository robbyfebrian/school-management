import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import Performance from '@/components/Performance';
import {
  GlassWaterIcon,
  MailIcon,
  PhoneCallIcon,
  TimerIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TeacherDetailPage() {
  return (
    <section className='flex flex-col md:flex-row gap-2'>
      <div className='flex flex-col gap-2 w-full md:w-2/3'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='w-full md:w-3/5 flex gap-2 items-center bg-blue-100 rounded-md shadow-sm p-4 border border-blue-200'>
            <Image
              alt='teacher-image'
              src='https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200'
              width={200}
              height={200}
              className='rounded-full object-cover w-30 h-30'
            />
            <div className='flex flex-col gap-2 w-[90%]'>
              <h1 className='text-lg font-semibold'>OLiver Girous</h1>
              <p className='text-xs line-clamp-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum vitae, dolorum tempora consequatur at
              </p>
              <div className='flex flex-wrap gap-2 text-sm justify-between'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <GlassWaterIcon size={16} />
                    <span className='min-w-max'>A+</span>
                  </div>
                  <div className='flex gap-2'>
                    <MailIcon size={16} />
                    <span className='min-w-max'>elmer@gmail.com</span>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <TimerIcon size={16} />
                    <span className='min-w-max'>January 1625</span>
                  </div>
                  <div className='flex gap-2'>
                    <PhoneCallIcon size={16} />
                    <span className='min-w-max'>+1 234 567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex-1 flex flex-wrap gap-2 justify-between'>
            <div className='flex flex-row md:flex-col lg:flex-row gap-2 items-center lg:items-start p-4 bg-white rounded-md shadow-sm w-[47%]'>
              <TimerIcon className='size-4 lg:size-6 mt-1' />
              <div className='flex flex-col text-start md:text-center lg:text-start'>
                <h2 className='text-lg font-semibold'>90%</h2>
                <p className='text-md text-gray-400'>Attendance</p>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-row gap-2 items-center lg:items-start p-4 bg-white rounded-md shadow-sm w-[47%]'>
              <GlassWaterIcon className='size-4 lg:size-6 mt-1' />
              <div className='flex flex-col text-start md:text-center lg:text-start'>
                <h2 className='text-lg font-semibold'>6</h2>
                <p className='text-md text-gray-400'>Lessons</p>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-row gap-2 items-center lg:items-start p-4 bg-white rounded-md shadow-sm w-[47%]'>
              <MailIcon className='size-4 lg:size-6 mt-1' />
              <div className='flex flex-col text-start md:text-center lg:text-start'>
                <h2 className='text-lg font-semibold'>2</h2>
                <p className='text-md text-gray-400'>Branches</p>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-row gap-2 items-center lg:items-start p-4 bg-white rounded-md shadow-sm w-[47%]'>
              <PhoneCallIcon className='size-4 lg:size-6 mt-1' />
              <div className='flex flex-col text-start md:text-center lg:text-start'>
                <h2 className='text-lg font-semibold'>6</h2>
                <p className='text-md text-gray-400'>Classes</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 bg-white p-4 rounded-sm shadow-sm border-gray-500 h-[800px]'>
          <h1 className='font-semibold text-lg'>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className='flex flex-col w-full md:w-1/3 gap-2'>
        <div className='flex flex-col gap-2 bg-white rounded-md shadow-sm p-4'>
          <h2 className='font-semibold'>Shortcuts</h2>
          <div className='flex gap-2 flex-wrap'>
            <Link
              href={'/'}
              className='p-2 text-xs rounded-sm text-gray-400 bg-blue-100'
            >
              Student's Classes
            </Link>
            <Link
              href={'/'}
              className='p-2 text-xs rounded-sm text-gray-400 bg-purple-100'
            >
              Student's Students
            </Link>
            <Link
              href={'/'}
              className='p-2 text-xs rounded-sm text-gray-400 bg-yellow-100'
            >
              Student's Lessons
            </Link>
            <Link
              href={'/'}
              className='p-2 text-xs rounded-sm text-gray-400 bg-pink-100'
            >
              Student's Exams
            </Link>
            <Link
              href={'/'}
              className='p-2 text-xs rounded-sm text-gray-400 bg-blue-100'
            >
              Student's Assignments
            </Link>
            <Link
              href={'/'}
              className='p-2 text-xs rounded-sm text-gray-400 bg-blue-100'
            >
              Student's Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </section>
  );
}
