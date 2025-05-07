'use client';

import { usePathname } from 'next/navigation';

export default function ClientBackgroundImage() {
  const pathname = usePathname();
  const isHajjOrUmrahPage = pathname === '/hajj' || pathname === '/umrah';

  return (
    <div
      className="absolute inset-0 bg-repeat opacity-20 z-0"
      style={{
        backgroundImage: isHajjOrUmrahPage
          ? 'url(/assets/images/bg-main.jpg)'
          : 'url(/assets/images/bg-main-3.svg)',
        backgroundSize: isHajjOrUmrahPage ? 'cover' : '600px',
        backgroundPosition: isHajjOrUmrahPage ? 'center' : 'initial',
        backgroundAttachment: isHajjOrUmrahPage ? 'fixed' : 'initial',
        backgroundRepeat: isHajjOrUmrahPage ? 'no-repeat' : 'repeat'
      }}
    ></div>
  );
} 