import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { BlogResponse } from "@/types/blog"

export const useGetBlog = () => {
  const [data, setData] = useState<BlogResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<BlogResponse>('/blogs');
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