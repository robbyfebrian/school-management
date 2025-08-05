import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { role } from '@/lib/data';

const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: 'Home',
        label: 'Home',
        href: '/',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'User',
        label: 'Teachers',
        href: '/list/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: 'GraduationCap',
        label: 'Students',
        href: '/list/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: 'Users',
        label: 'Parents',
        href: '/list/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: 'BookOpen',
        label: 'Subjects',
        href: '/list/subjects',
        visible: ['admin'],
      },
      {
        icon: 'Layers',
        label: 'Classes',
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: 'Notebook',
        label: 'Lessons',
        href: '/list/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: 'FileText',
        label: 'Exams',
        href: '/list/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'ClipboardList',
        label: 'Assignments',
        href: '/list/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'BarChart2',
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'CheckSquare',
        label: 'Attendance',
        href: '/list/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'Calendar',
        label: 'Events',
        href: '/list/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'MessageCircle',
        label: 'Messages',
        href: '/list/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'Megaphone',
        label: 'Announcements',
        href: '/list/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: 'UserCircle',
        label: 'Profile',
        href: '/profile',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'Settings',
        label: 'Settings',
        href: '/settings',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: 'LogOut',
        label: 'Logout',
        href: '/logout',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
];

export default async function Menu() {
  return (
    <div className='mt-2 pb-12'>
      {menuItems.map((section) => (
        <div className='flex flex-col gap-2' key={section.title}>
          <span className='hidden lg:block text-gray-400 font-bold my-2'>
            {section.title}
          </span>
          {section.items.map((item) => {
            const LucideIcon =
              (LucideIcons[
                item.icon as keyof typeof LucideIcons
              ] as LucideIcon) || LucideIcons.HelpCircle;
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-blue-100'
                >
                  {LucideIcon && <LucideIcon size={20} />}
                  <span className='hidden lg:block'>{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
