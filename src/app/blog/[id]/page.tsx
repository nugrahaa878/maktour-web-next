import Navbar from "@/components/navbar";
import BlogContent from "./BlogContent";

export default async function BlogDetails({ params, }: { params: Promise<{ id: string }> }) {
  const blogId = (await params).id;

  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <BlogContent blogId={blogId} />
    </main>
  );
}