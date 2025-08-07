const announcements = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor sit amet',
    time: '2025-01-01',
    description: 'Lorem Ipsum Dolor sit amet, consectetur adipiscing elit. Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Lorem Ipsum Dolor sit amet',
    time: '2025-01-01',
    description: 'Lorem Ipsum Dolor sit amet, consectetur adipiscing elit. Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Lorem Ipsum Dolor sit amet',
    time: '2025-01-01',
    description: 'Lorem Ipsum Dolor sit amet, consectetur adipiscing elit. Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function Announcements() {
  return (
    <div className='flex flex-col gap-4 bg-white p-4 rounded-xl border-gray-500 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl'>Events</h1>
        <span className='text-xs text-gray-500'></span>
      </div>
      {announcements.map((announcement) => (
        <div className="p-4 even:bg-blue-100 odd:bg-purple-100 shadow-sm rounded-md" key={announcement.id}>
            <div className='flex items-center justify-between mb-2'>
              <h1 className='font-bold text-sm tracking-tight line-clamp-1'>{announcement.title}</h1>
              <span className='min-w-max text-[10px] lg:text-xs text-gray-500 px-1 py-1 rounded-sm bg-white/60'>{announcement.time}</span>
            </div>
            <p className='text-xs text-gray-500 leading-tight'>{announcement.description}</p>
        </div>
      ))}
    </div>
  );
}
