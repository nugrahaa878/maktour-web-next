import React, { ReactNode } from 'react';
import { ContentBlock } from '@/types/umrah';

export const renderBlock = (block: ContentBlock, index: number): ReactNode => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-gray-700 mb-4">
          {block.children.map((child, childIndex) => {
            if (child.bold) {
              return <strong key={childIndex}>{child.text}</strong>;
            }
            if (child.italic) {
              return <em key={childIndex}>{child.text}</em>;
            }
            if (child.underline) {
              return <u key={childIndex}>{child.text}</u>;
            }
            return <span key={childIndex}>{child.text}</span>;
          })}
        </p>
      );

    case 'heading':
      switch (block.level) {
        case 1:
          return (
            <h1 key={index} className="text-3xl font-bold my-4">
              {block.children.map((child, childIndex) => {
                if (child.bold) {
                  return <strong key={childIndex}>{child.text}</strong>;
                }
                if (child.italic) {
                  return <em key={childIndex}>{child.text}</em>;
                }
                if (child.underline) {
                  return <u key={childIndex}>{child.text}</u>;
                }
                return <span key={childIndex}>{child.text}</span>;
              })}
            </h1>
          );
        case 2:
          return (
            <h2 key={index} className="text-2xl font-bold my-4">
              {block.children.map((child, childIndex) => {
                if (child.bold) {
                  return <strong key={childIndex}>{child.text}</strong>;
                }
                if (child.italic) {
                  return <em key={childIndex}>{child.text}</em>;
                }
                if (child.underline) {
                  return <u key={childIndex}>{child.text}</u>;
                }
                return <span key={childIndex}>{child.text}</span>;
              })}
            </h2>
          );
        case 3:
          return (
            <h3 key={index} className="text-xl font-bold my-4">
              {block.children.map((child, childIndex) => {
                if (child.bold) {
                  return <strong key={childIndex}>{child.text}</strong>;
                }
                if (child.italic) {
                  return <em key={childIndex}>{child.text}</em>;
                }
                if (child.underline) {
                  return <u key={childIndex}>{child.text}</u>;
                }
                return <span key={childIndex}>{child.text}</span>;
              })}
            </h3>
          );
        default:
          return (
            <h4 key={index} className="text-lg font-bold my-4">
              {block.children.map((child, childIndex) => {
                if (child.bold) {
                  return <strong key={childIndex}>{child.text}</strong>;
                }
                if (child.italic) {
                  return <em key={childIndex}>{child.text}</em>;
                }
                if (child.underline) {
                  return <u key={childIndex}>{child.text}</u>;
                }
                return <span key={childIndex}>{child.text}</span>;
              })}
            </h4>
          );
      }

    case 'list':
      if (block.format === 'ordered') {
        return (
          <ol key={index} className="list-decimal pl-5 mb-4">
            {block.children.map((child, childIndex) => (
              <li key={childIndex} className="mb-1">
                {child.text}
              </li>
            ))}
          </ol>
        );
      } else {
        return (
          <ul key={index} className="list-disc pl-5 mb-4">
            {block.children.map((child, childIndex) => (
              <li key={childIndex} className="mb-1">
                {child.text}
              </li>
            ))}
          </ul>
        );
      }

    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
          {block.children.map((child, childIndex) => (
            <span key={childIndex}>{child.text}</span>
          ))}
        </blockquote>
      );

    case 'code':
      return (
        <pre key={index} className="bg-gray-100 p-4 rounded my-4 overflow-x-auto">
          <code>
            {block.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </code>
        </pre>
      );

    default:
      return (
        <p key={index} className="text-gray-700 mb-4">
          {block.children.map((child, childIndex) => (
            <span key={childIndex}>{child.text}</span>
          ))}
        </p>
      );
  }
}; 