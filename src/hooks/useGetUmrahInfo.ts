import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { UmrahInfoResponse } from "@/types/umrah"
import { mockUmrahService } from "@/services/mockUmrahService"

// Set this to true to use mock data instead of real API
const USE_MOCK_API = true;

export const useGetUmrahInfo = () => {
  const [data, setData] = useState<UmrahInfoResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        let responseData: UmrahInfoResponse;

        if (USE_MOCK_API) {
          // Use mock data
          responseData = await mockUmrahService.getUmrahInfo();
        } else {
          // Use real API
          const response = await axios.get<UmrahInfoResponse>('/umrah-info');
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
