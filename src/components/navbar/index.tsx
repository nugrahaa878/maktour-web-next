import Link from 'next/link'
import Image from 'next/image';
import MobileMenuButton from './MobileMenuButton';
import maktourLogo from '../../../public/assets/icons/favicon-maktour.png';

const menuItems = [
  { name: 'The Journey', path: '/journey' },
  { name: 'Serviced Countries', path: '/countries' },
  { name: 'Packages', path: '/packages' },
  { name: 'Service Providers', path: '/providers' },
  { name: 'Hajj Guidelines', path: '/guidelines' },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={maktourLogo}
                alt="Maktour Hajj Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Maktour Hajj
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              EN
            </button>
            <Link
              href="/login"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenuButton menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;