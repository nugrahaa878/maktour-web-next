'use client'

import { useGetFaq } from "@/hooks/useGetFaq";

interface Props {
  faqId: number;
}

const FaqContent = ({ faqId }: Props) => {
  const { getFaqFilteredById } = useGetFaq();

  const faq = getFaqFilteredById(faqId);

  return (
    <div>
      {faq.map((faq) => faq.question)}
    </div>
  )
}

export default FaqContent;