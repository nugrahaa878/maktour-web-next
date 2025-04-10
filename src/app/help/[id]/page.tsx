import Navbar from "@/components/navbar";
import FaqContent from "./FaqContent";

const HelpPageCategory = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;

  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <FaqContent faqId={Number(resolvedParams.id)} />
    </main>
  );
}

export default HelpPageCategory;