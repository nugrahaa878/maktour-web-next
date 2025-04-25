import axios from "@/lib/axios"
import { useEffect, useState } from "react"

export interface HeroImage {
  id: number;
  alternativeText: string;
  photo: {
    url: string;
    formats: {
      large: {
        url: string;
      };
      medium: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
}

export interface HeroImageResponse {
  data: {
    id: number;
    images: HeroImage[];
  }[];
  meta: Record<string, any>;
}

export const useGetHeroImage = () => {
  const [data, setData] = useState<HeroImageResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<HeroImageResponse>('/sliding-hero-section-image');
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
