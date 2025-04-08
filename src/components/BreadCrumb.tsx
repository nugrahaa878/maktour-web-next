import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';


export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadCrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadCrumb({ items, className = '' }: BreadCrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <FaChevronRight className="h-4 w-4 text-black" />}
          <Link
            href={item.href}
            className={`ml-2 text-lg ${index === items.length - 1
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
