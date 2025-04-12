import Image from "next/image";
import maktourLogo from "../../../../../public/assets/images/maktour-logo.png";

const AboutMaktour = () => {
  return <div className="pt-10 md:pt-20 px-4 sm:px-8 md:px-16 lg:px-36 text-black">
    <h1 className="text-3xl md:text-5xl font-bold abhaya-libre text-center md:text-left mb-10">Maktour Travel</h1>

    <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-0">
      <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
        <Image src={maktourLogo} alt="maktour logo" className="w-1/2 md:w-3/5" />
      </div>
      <p className="flex-2 pt-0 md:pt-10 leading-relaxed text-sm md:text-base px-8 md:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
}

export default AboutMaktour;