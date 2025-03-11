import Image from "next/image"
import nabawi from '../../../../../public/assets/icons/nabawi-mosque.png'
import kabah from '../../../../../public/assets/icons/kaaba-mecca.png'
import hajj from '../../../../../public/assets/icons/hajj.png'

const PreviewPackages = () => {
  return (
    <div className="flex justify-around w-full text-white mt-28 gap-10">
      <div className="flex flex-col items-center">
        <div className="h-24 w-24 relative mb-4">
          <Image src={nabawi} alt="nabawi" fill className="object-contain" />
        </div>
        <p className="text-md px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
      <div className="w-1 bg-white h-52"></div>
      <div className="flex flex-col items-center">
        <div className="h-24 w-24 relative mb-4">
          <Image src={kabah} alt="kabah" fill className="object-contain" />
        </div>
        <p className="text-md px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
      <div className="w-1 bg-white h-52"></div>
      <div className="flex flex-col items-center">
        <div className="h-24 w-24 relative mb-4">
          <Image src={hajj} alt="hajj" fill className="object-contain" />
        </div>
        <p className="text-md px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>
  )
}

export default PreviewPackages