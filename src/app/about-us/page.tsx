import PlanWithUs from "@/components/PlanWithUs";
import VisionMision from "./components/VisionMision";
import MeetThePeople from "./components/MeetThePeople";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutMaktour from "./components/AboutMaktour";
import BreadCrumb from "@/components/BreadCrumb";

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <div className="pt-10 md:pt-20 px-4 sm:px-8 md:px-16 lg:px-36 text-black">
        <BreadCrumb items={[{
          href: '/',
          label: 'Home',
        }, {
          href: '#',
          label: 'About Us',
        },
        ]} />
      </div>
      <AboutMaktour />
      <PlanWithUs />
      <VisionMision />
      <MeetThePeople />
      <Footer />
    </main>
  );
}

export default AboutUs;