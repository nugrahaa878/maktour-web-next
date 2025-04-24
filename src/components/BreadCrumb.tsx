'use client'

import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadCrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadCrumb({ items, className = '' }: BreadCrumbProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, item: BreadcrumbItem, index: number) => {
    if (index < items.length - 1) {
      e.preventDefault();
      router.replace(item.href);
    }
  };

  return (
    <nav className={`flex flex-wrap items-center space-x-1 md:space-x-2 text-xs md:text-sm ${className}`}>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <FaChevronRight className="h-3 w-3 md:h-4 md:w-4 text-black" />}
          <Link
            href={item.href}
            onClick={(e) => handleClick(e, item, index)}
            className={`ml-1 md:ml-2 text-sm md:text-lg truncate max-w-[100px] md:max-w-[200px] lg:max-w-none ${index === items.length - 1
              ? 'text-gray-900 font-medium'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
