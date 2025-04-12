'use client'

import Chip from "@/components/Chip"
import { useLanguage } from "@/context/LanguageContext";
import { useGetPackageDetail } from "@/hooks/usePackageDetail";
import { formatDollar, formatRupiah } from "@/lib/currencyFormatter";
import Image from "next/image";
import { ContentNode, DetailSection } from "@/types/package";

interface Props {
  documentId: string;
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
  children?: TextNode[];
}

interface ListNode {
  type: string;
  format?: string;
  children?: ListItemNode[];
}

interface HeadingNode {
  type: string;
  level?: number;
  children?: TextNode[];
}

const DetailPackage = ({ documentId }: Props) => {
  const { language } = useLanguage();
  const baseLanguage = localStorage.getItem('language')
  const { data, isLoading, error } = useGetPackageDetail(documentId, baseLanguage ?? 'en');

  const packageData = data?.data;

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="px-4 md:px-24 py-6 md:py-10 text-center text-red-500">Error: {error.message}</div>;
  }

  if (!packageData) {
    return <div className="px-4 md:px-24 py-6 md:py-10 text-center">Package not found</div>;
  }

  // Helper function to render content nodes
  const renderContentNodes = (contentNodes: ContentNode[]) => {
    if (!contentNodes || contentNodes.length === 0) return "No content available";

    return contentNodes.map((node, index) => {
      if (node.type === 'paragraph' && node.children) {
        return (
          <p key={index} className="mb-4">
            {node.children.map((child: TextNode, childIndex: number) => (
              <span
                key={`${index}-${childIndex}`}
                className={`
                  ${child.bold ? 'font-bold' : ''}
                  ${child.italic ? 'italic' : ''}
                  ${child.underline ? 'underline' : ''}
                `}
              >
                {child.text}
              </span>
            ))}
          </p>
        );
      }

      if (node.type === 'list' && node.children) {
        const listNode = node as ListNode;
        return (
          <ul key={index} className="list-disc pl-6 mb-4">
            {listNode.children?.map((item: ListItemNode, itemIndex: number) => (
              <li key={itemIndex} className="mb-2">
                {item.children?.map((child: TextNode, childIndex: number) => (
                  <span
                    key={`${index}-${itemIndex}-${childIndex}`}
                    className={`
                      ${child.bold ? 'font-bold' : ''}
                      ${child.italic ? 'italic' : ''}
                      ${child.underline ? 'underline' : ''}
                    `}
                  >
                    {child.text}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        );
      }

      if (node.type === 'heading' && node.children) {
        const headingNode = node as HeadingNode;
        return (
          <h5 key={index} className="text-lg font-bold mb-3">
            {headingNode.children?.map((child: TextNode, childIndex: number) => (
              <span
                key={`${index}-${childIndex}`}
                className={`
                  ${child.bold ? 'font-bold' : ''}
                  ${child.italic ? 'italic' : ''}
                  ${child.underline ? 'underline' : ''}
                `}
              >
                {child.text}
              </span>
            ))}
          </h5>
        );
      }

      return null;
    });
  };

  const renderDetailSection = (section: DetailSection) => {
    return (
      <div className="flex flex-col gap-4 md:gap-6">
        <h3 className="text-xl md:text-2xl font-bold">{section.header}</h3>
        {section.media && (
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src={section.media.file.url}
              alt={section.media.alternativeText}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="prose max-w-none">
          {renderContentNodes(section.content)}
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{packageData.name}</h1>

      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-10">
        <Chip label={`${language === 'en' ? formatDollar(packageData.priceInUsd) : formatRupiah(packageData.priceInIdr)}`} />
        <Chip label={`${packageData.durationInDay} Days`} />
        <Chip label={packageData.category} />
        <Chip label={packageData.classification} />
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:flex-1 border border-[#CCCCCC] rounded-2xl py-6 px-6 md:py-8 md:px-12">
            {renderDetailSection(packageData.requirementDetail)}
          </div>
          <div className="w-full lg:flex-1 border border-[#CCCCCC] rounded-2xl py-6 px-6 md:py-8 md:px-12">
            {renderDetailSection(packageData.accommodationDetail)}
          </div>
        </div>

        <div className="border border-[#CCCCCC] rounded-2xl py-6 px-6 md:py-8 md:px-12">
          {renderDetailSection(packageData.cancellationPolicy)}
        </div>

        {packageData.additionalInfos.map((info, index) => (
          <div key={index} className="border border-[#CCCCCC] rounded-2xl py-6 px-6 md:py-8 md:px-12">
            {renderDetailSection(info)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailPackage;