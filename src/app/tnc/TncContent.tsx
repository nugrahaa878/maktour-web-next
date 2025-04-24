'use client';

import { FC } from 'react';
import { useGetTnc } from '@/hooks/useGetTnc';
import { ContentNode, TextNode } from '@/types/tnc';
import { useLanguage } from '@/context/LanguageContext';
import Loader from '@/components/Loader';

type ListItemNode = {
  type: 'list-item';
  children: TextNode[];
};

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = `h${HeadingLevel}`;

const TncContent: FC = () => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useGetTnc();

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-red-600">Failed to load Terms and Conditions.</p>
        </div>
      </div>
    );
  }

  const tncItem = data?.data.filter((tnc) => tnc.locale === language)[0];
  const tncContent = tncItem?.tnc[0];

  if (!tncContent) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center">No Terms and Conditions found.</p>
        </div>
      </div>
    );
  }

  const renderTextNode = (node: TextNode) => {
    const text = node.text;
    if (node.bold) return <strong>{text}</strong>;
    if (node.italic) return <em>{text}</em>;
    if (node.underline) return <u>{text}</u>;
    return text;
  };

  const renderContentNode = (node: ContentNode) => {
    switch (node.type) {
      case 'heading': {
        const level = (node.level || 1) as HeadingLevel;
        const HeadingComponent = `h${level}` as HeadingTag;
        return (
          <HeadingComponent className={`font-bold ${level === 1 ? 'text-3xl mb-6' : 'text-xl mb-4'} mt-6`}>
            {node.children.map((child, index) => {
              if ('text' in child) {
                return <span key={index}>{renderTextNode(child)}</span>;
              }
              return null;
            })}
          </HeadingComponent>
        );
      }

      case 'paragraph':
        return (
          <p className="mb-4 text-gray-700">
            {node.children.map((child, index) => {
              if ('text' in child) {
                return <span key={index}>{renderTextNode(child)}</span>;
              }
              return null;
            })}
          </p>
        );

      case 'list':
        const ListComponent = node.format === 'ordered' ? 'ol' : 'ul';
        const listStyle = node.format === 'ordered' ? 'list-decimal' : 'list-disc';
        return (
          <ListComponent className={`${listStyle} pl-6 mb-4 space-y-2`}>
            {node.children.map((item, index) => {
              if ('type' in item && item.type === 'list-item') {
                return (
                  <li key={index} className="text-gray-700">
                    {(item as ListItemNode).children.map((child, childIndex) => (
                      <span key={childIndex}>{renderTextNode(child)}</span>
                    ))}
                  </li>
                );
              }
              return null;
            })}
          </ListComponent>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#001D0F] abhaya-libre">
          {tncContent.header}
        </h1>
        <div className="prose max-w-none">
          {tncContent.content.map((node, index) => (
            <div key={index}>{renderContentNode(node)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TncContent;
