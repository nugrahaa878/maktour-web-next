import Image from "next/image"
import nabawi from '../../../../../public/assets/icons/nabawi-mosque.png'
import kabah from '../../../../../public/assets/icons/kaaba-mecca.png'
import hajj from '../../../../../public/assets/icons/hajj.png'

const PreviewPackages = () => {
  return (
    <div className="flex flex-wrap md:flex-row md:flex-nowrap justify-around w-full text-white mt-28 gap-10 md:gap-10 px-4">
      <div className="flex flex-row md:flex-nowrap w-full md:w-auto">
        {/* First item */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-20 h-20 md:h-24 md:w-24 relative mb-4">
            <Image src={nabawi} alt="nabawi" fill className="object-contain" />
          </div>
          <p className="text-sm text-center md:text-md px-2 md:px-10 w-40 md:w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>

        {/* Divider between first and second item */}
        <div className="w-0.5 bg-white h-52 mx-4 hidden md:block"></div>

        {/* Second item */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-20 h-20 md:h-24 md:w-24 relative mb-4">
            <Image src={kabah} alt="kabah" fill className="object-contain" />
          </div>
          <p className="text-sm text-center md:text-md px-2 md:px-10 w-40 md:w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
      </div>

      {/* Divider between second and third item */}
      <div className="w-2 bg-white h-52 hidden md:block"></div>

      {/* Third item */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 md:h-24 md:w-24 relative mb-4">
          <Image src={hajj} alt="hajj" fill className="object-contain" />
        </div>
        <p className="text-sm text-center md:text-md px-2 md:px-10 w-40 md:w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>
  )
}

export default PreviewPackages