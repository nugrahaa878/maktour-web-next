import Navbar from "@/components/navbar";
import FaqContent from "./FaqContent";

export default async function HelpPageCategory({ params, }: { params: Promise<{ id: string }> }) {
  const faqId = (await params).id;

  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <FaqContent faqId={Number(faqId)} />
    </main>
  );
}