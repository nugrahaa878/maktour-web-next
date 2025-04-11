import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { PackageDetailResponse } from "@/types/package"

export const useGetPackageDetail = (id: string) => {
  const [data, setData] = useState<PackageDetailResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<PackageDetailResponse>(`/packages/${id}?locale=en`);
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, error };
}
