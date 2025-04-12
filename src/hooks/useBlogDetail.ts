import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { BlogDetailResponse } from "@/types/blog"

export const useGetBlogDetail = (id: string, locale: string) => {
  const [data, setData] = useState<BlogDetailResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<BlogDetailResponse>(`/blogs/${id}?locale=${locale}`);
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id, locale]);

  return { data, isLoading, error };
} 