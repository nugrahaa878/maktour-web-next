import Navbar from "@/components/navbar";
import PackageCard from "./components/PackageCard";

const PackagesPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <PackageCard />
    </main>
  );
}

export default PackagesPage;