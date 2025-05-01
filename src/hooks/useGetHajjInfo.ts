import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { HajjInfoResponse } from "@/types/hajj"
import { mockHajjService } from "@/services/mockHajjService"

// Set this to true to use mock data instead of real API
const USE_MOCK_API = true;

export const useGetHajjInfo = () => {
  const [data, setData] = useState<HajjInfoResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        let responseData: HajjInfoResponse;

        if (USE_MOCK_API) {
          // Use mock data
          responseData = await mockHajjService.getHajjInfo();
        } else {
          // Use real API
          const response = await axios.get<HajjInfoResponse>('/hajj-info');
          responseData = response.data;
        }

        setData(responseData);
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