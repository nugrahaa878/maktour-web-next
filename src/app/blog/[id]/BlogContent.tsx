interface Props {
  blogId: string;
}

const BlogContent = ({ blogId }: Props) => {
  return (
    <div>
      {blogId}
    </div>
  );
}

export default BlogContent;