'use client'

import Chip from "@/components/Chip"
import { useLanguage } from "@/context/LanguageContext";
import { useGetPackageDetail } from "@/hooks/usePackageDetail";
import { formatDollar, formatRupiah } from "@/lib/currencyFormatter";

interface Props {
  documentId: string;
}

const DetailPackage = ({ documentId }: Props) => {
  const { language } = useLanguage();
  const { data, isLoading, error } = useGetPackageDetail(documentId);

  const packageData = data?.data;

  if (isLoading) {
    return <div className="px-24 py-10 text-center">Loading package details...</div>;
  }

  if (error) {
    return <div className="px-24 py-10 text-center text-red-500">Error: {error.message}</div>;
  }

  if (!packageData) {
    return <div className="px-24 py-10 text-center">Package not found</div>;
  }

  // Helper function to render content nodes
  const renderContentNodes = (contentNodes: any[]) => {
    if (!contentNodes || contentNodes.length === 0) return "No content available";

    return contentNodes.map((node, index) => {
      if (node.type === 'paragraph' && node.children) {
        return node.children.map((child: any, childIndex: number) => (
          <span key={`${index}-${childIndex}`}>{child.text}</span>
        ));
      }
      return null;
    });
  };

  return <div className="px-24">
    <h1 className="text-5xl font-bold mb-4">{packageData.name}</h1>

    <div className="flex gap-3 mb-10">
      <Chip label={`${language === 'en' ? formatDollar(packageData.priceInUsd) : formatRupiah(packageData.priceInIdr)}`} />
      <Chip label={`${packageData.durationInDay} Days`} />
    </div>

    <div className="flex flex-col gap-10">
      <div className="flex gap-10">
        <div className="flex-1 border border-[#CCCCCC] rounded-2xl py-8 px-12">
          <h3 className="text-2xl font-bold mb-3">Persyaratan</h3>
          <p>{packageData.requirementDetail ? renderContentNodes(packageData.requirementDetail.content) : "No requirements specified"}</p>
        </div>
        <div className="flex-1 border border-[#CCCCCC] rounded-2xl py-8 px-12">
          <h3 className="text-2xl font-bold mb-3">Akomodasi</h3>
          <p>{packageData.accommodationDetail ? renderContentNodes(packageData.accommodationDetail.content) : "No accommodation details specified"}</p>
        </div>
      </div>
      <div className="border border-[#CCCCCC] rounded-2xl py-8 px-12">
        <h3 className="text-2xl font-bold mb-3">Keterangan Pembatalan</h3>
        <p>{packageData.cancellationPolicy ? renderContentNodes(packageData.cancellationPolicy) : "No cancellation policy specified"}</p>
      </div>
    </div>
  </div>
}

export default DetailPackage;