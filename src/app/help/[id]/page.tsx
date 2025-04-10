
import Navbar from "@/components/navbar";
import FaqContent from "./FaqContent";

const HelpPageCategory = ({ params }: { params: { id: string } }) => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <FaqContent faqId={Number(params.id)} />
    </main>
  );
}

export default HelpPageCategory;