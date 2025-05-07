'use client';

import { usePathname } from 'next/navigation';

export default function ClientBackgroundImage() {
  const pathname = usePathname();
  const isHajjOrUmrahPage = pathname === '/hajj' || pathname === '/umrah';

  return (
    <div
      className="absolute inset-0 bg-repeat opacity-10 z-0"
      style={{
        backgroundImage: 'url(/assets/images/bg-main-3.svg)',
        backgroundSize: '600px',
        backgroundPosition: 'initial',
        backgroundAttachment: 'initial',
        backgroundRepeat: 'repeat'
      }}
    ></div>
  );
} 