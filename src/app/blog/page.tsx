import { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <div className="min-h-screen p-8 flex">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p>This is a blog page</p>
      <p>This is content blog</p>
    </div>
  )
}

export default BlogPage;