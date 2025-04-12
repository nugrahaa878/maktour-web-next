'use client'

import { useGetBlogDetail } from "@/hooks/useBlogDetail";
import Image from "next/image";
import { FC, createElement, ReactNode } from "react";
import SearchBlog from "./SearchBlog";

interface Props {
  blogId: string;
  locale?: string;
}

interface TextNode {
  text: string;
  type: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

interface ListItemNode {
  type: string;
  children: TextNode[];
}

interface ListNode {
  type: 'list';
  format?: string;
  children: ListItemNode[];
}

interface HeadingNode {
  type: 'heading';
  level?: number;
  children: TextNode[];
}

interface ParagraphNode {
  type: 'paragraph';
  children: TextNode[];
}

type ContentNode = HeadingNode | ParagraphNode | ListNode;

interface BlogData {
  data: {
    title: string;
    content: ContentNode[];
    publishedAt: string;
    coverImage: {
      file: {
        formats: {
          large: {
            url: string;
          };
        };
      };
      alternativeText?: string;
    };
  };
}

const BlogContent: FC<Props> = ({ blogId, locale = "en" }) => {
  const { data, isLoading, error } = useGetBlogDetail(blogId, locale) as {
    data: BlogData | undefined;
    isLoading: boolean;
    error: Error | null;
  };

  if (isLoading) {
    return (
      <div className="animate-pulse md:w-2/3 px-10 items-center m-auto py-12">
        <div className="h-96 bg-gray-200 rounded-lg mb-8" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-full" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Something went wrong
        </h2>
        <p className="text-gray-600 mt-2">Please try again later</p>
      </div>
    );
  }

  const { title, content, publishedAt, coverImage } = data.data;

  const renderTextNode = (child: TextNode, key: string) => (
    <span
      key={key}
      className={`
        ${child.bold ? 'font-bold' : ''}
        ${child.italic ? 'italic' : ''}
        ${child.underline ? 'underline' : ''}
      `.trim()}
    >
      {child.text}
    </span>
  );

  const renderContentNodes = (contentNodes: ContentNode[]): ReactNode => {
    if (!contentNodes || contentNodes.length === 0) return "No content available";

    return contentNodes.map((node, index) => {
      if (node.type === 'paragraph') {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {node.children.map((child, childIndex) =>
              renderTextNode(child, `${index}-${childIndex}`)
            )}
          </p>
        );
      }

      if (node.type === 'list') {
        const ListComponent = node.format === "ordered" ? "ol" : "ul";

        return createElement(
          ListComponent,
          {
            key: index,
            className: `${node.format === "ordered" ? "list-decimal" : "list-disc"} pl-6 mb-6 space-y-2`
          },
          node.children.map((item, itemIndex) => (
            <li key={itemIndex} className="text-gray-700">
              {item.children.map((child, childIndex) =>
                renderTextNode(child, `${index}-${itemIndex}-${childIndex}`)
              )}
            </li>
          ))
        );
      }

      if (node.type === 'heading') {
        const level = node.level || 1;
        const headingClasses = {
          1: "text-4xl font-bold mb-6",
          2: "text-3xl font-semibold mb-4",
          3: "text-2xl font-semibold mb-3",
        }[level] || "text-xl font-semibold mb-3";

        return createElement(
          `h${level}`,
          {
            key: index,
            className: headingClasses
          },
          node.children.map((child, childIndex) =>
            renderTextNode(child, `${index}-${childIndex}`)
          )
        );
      }

      return null;
    });
  };

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="mx-auto px-28 py-8 flex gap-10">
      <div>
        <div className="relative h-[500px] rounded-xl overflow-hidden mb-8">
          <Image
            src={coverImage.file.formats.large.url}
            alt={coverImage.alternativeText || title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <time className="text-gray-600">
            {formattedDate}
          </time>
        </header>

        <div className="prose prose-lg max-w-none">
          {renderContentNodes(content)}
        </div>
      </div>
      <SearchBlog />
    </article>
  );
};

export default BlogContent;