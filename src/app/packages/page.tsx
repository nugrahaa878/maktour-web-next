import Navbar from "@/components/navbar";
import PackageCard from "./components/PackageCard";
import BreadCrumb from "@/components/BreadCrumb";

const PackagesPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <div className="container mx-auto px-4 pt-16">
        <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Packages', href: '#' }]} />
      </div>
      <PackageCard />
    </main>
  );
}

export default PackagesPage;