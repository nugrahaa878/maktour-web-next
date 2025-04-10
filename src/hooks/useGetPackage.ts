import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { PackageItem, PackageListResponse, PackageDetailResponse } from "@/types/package"

export const useGetPackage = () => {
  const [data, setData] = useState<PackageListResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<PackageListResponse>('/packages');
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const getPackageById = async (id: string, locale: string = 'en'): Promise<PackageItem | null> => {
    try {
      const response = await axios.get<PackageDetailResponse>(`/packages/${id}?locale=${locale}`);
      return response.data.data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      return null;
    }
  };

  const getPackagesByCategory = (category: string): PackageItem[] => {
    if (!data) return [];
    return data.data.filter((pkg) => pkg.category === category);
  };

  return { data, isLoading, error, getPackageById, getPackagesByCategory };
}
