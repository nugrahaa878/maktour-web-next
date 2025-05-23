import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { FaqItem, FaqResponse } from "@/types/faq"

export const useGetFaq = () => {
  const [data, setData] = useState<FaqResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<FaqResponse>('/faqs');
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])


  const getFaqFilteredById = (id: number): FaqItem[] => {
    if (!data) return [];

    return data.data.filter((faq) => faq.faqCategory?.id === id);
  }

  return { data, isLoading, error, getFaqFilteredById }
}
