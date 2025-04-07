import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { FaqCategory } from "@/types/faq"

interface FaqCategoryResponse {
  data: FaqCategory[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const useGetFaqCategory = () => {
  const [data, setData] = useState<FaqCategoryResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<FaqCategoryResponse>('/faq-categories');
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  return { data, isLoading, error }
}
