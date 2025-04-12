import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { PolicyResponse } from "@/types/policy"

export const useGetPrivacyPolicy = () => {
  const [data, setData] = useState<PolicyResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<PolicyResponse>('/privacy-policy');
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