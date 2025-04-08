import BreadCrumb from "@/components/BreadCrumb";
import Chip from "@/components/Chip";
import Navbar from "@/components/navbar";
import { ExploreButton } from "../components/ExploreButton";
import Footer from "@/components/footer";

const PackageDetails = () => {


  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />

      <div className="px-24 py-10">
        <BreadCrumb items={[{
          href: '/home',
          label: 'Package',
        }, {
          href: '/asd',
          label: 'Paket Rahmatan',
        }]} />
      </div>

      <div className="px-24">
        <h1 className="text-5xl font-bold mb-4">Paket Rahmatan</h1>

        <div className="flex gap-3 mb-10">
          <Chip label="USD 5.600" />
          <Chip label="9 Days" />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <div className="flex-1 border border-[#CCCCCC] rounded-2xl py-8 px-12">
              <h3 className="text-2xl font-bold mb-3">Persyaratan</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>
            </div>
            <div className="flex-1 border border-[#CCCCCC] rounded-2xl py-8 px-12">
              <h3 className="text-2xl font-bold mb-3">Akomodasi</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>
            </div>
          </div>
          <div className="border border-[#CCCCCC] rounded-2xl py-8 px-12">
            <h3 className="text-2xl font-bold mb-3">Keterangan Pembatalan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <ExploreButton />
      </div>

      <Footer />
    </main>
  )
}

export default PackageDetails;