import Image from "next/image";
import maktourLogo from '../../../public/assets/images/maktour-logo.png';

const Loader = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse">
          <Image
            src={maktourLogo}
            alt="Maktour Logo"
            width={100}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Loader;