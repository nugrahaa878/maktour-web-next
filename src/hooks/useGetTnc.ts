import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { TncResponse } from "@/types/tnc"

export const useGetTnc = () => {
  const [data, setData] = useState<TncResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<TncResponse>('/tncs');
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
