import PlanWithUs from "@/components/PlanWithUs";
import VisionMision from "./components/VisionMision";
import MeetThePeople from "./components/MeetThePeople";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <PlanWithUs />
      <VisionMision />
      <MeetThePeople />
      <Footer />
    </main>
  );
}

export default AboutUs;