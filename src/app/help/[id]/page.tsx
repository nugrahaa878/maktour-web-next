import Navbar from "@/components/navbar";
import FaqContent from "./FaqContent";
import BreadCrumb from "@/components/BreadCrumb";

export default async function HelpPageCategory({ params, }: { params: Promise<{ id: string }> }) {
  const faqId = (await params).id;

  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <div className="container mx-auto px-4 pt-16">
        <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Help', href: '/help' }, { label: 'Detail', href: '#' }]} />
      </div>
      <FaqContent faqId={Number(faqId)} />
    </main>
  );
}