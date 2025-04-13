import Navbar from "@/components/navbar";
import BlogContent from "./BlogContent";
import Footer from "@/components/footer";

export default async function BlogDetails({ params, }: { params: Promise<{ id: string }> }) {
  const blogId = (await params).id;

  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <BlogContent blogId={blogId} />
      <Footer />
    </main>
  );
}