import PlanWithUs from "@/components/PlanWithUs";
import VisionMision from "./components/VisionMision";
import MeetThePeople from "./components/MeetThePeople";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutMaktour from "./components/AboutMaktour";

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <AboutMaktour />
      <PlanWithUs />
      <VisionMision />
      <MeetThePeople />
      <Footer />
    </main>
  );
}

export default AboutUs;