import BreadCrumb from "@/components/BreadCrumb";
import Navbar from "@/components/navbar";
import { ExploreButton } from "../components/ExploreButton";
import Footer from "@/components/footer";
import DetailPackage from "./DetailPackage";

const PackageDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const documentId = (await params).slug;

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

      <DetailPackage documentId={documentId} />

      <div className="flex justify-center mt-10 mb-10">
        <ExploreButton />
      </div>

      <Footer />
    </main>
  )
}

export default PackageDetails;