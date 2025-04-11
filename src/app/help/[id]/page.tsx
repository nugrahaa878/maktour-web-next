import Navbar from "@/components/navbar";
import FaqContent from "./FaqContent";

export default async function HelpPageCategory({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <FaqContent faqId={Number(params.id)} />
    </main>
  );
}