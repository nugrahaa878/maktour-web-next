import axios from "@/lib/axios"
import { useEffect, useState } from "react"
import { GalleryResponse } from "@/types/gallery"

export const useGetGallery = () => {
  const [data, setData] = useState<GalleryResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<GalleryResponse>('/galleries');
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
