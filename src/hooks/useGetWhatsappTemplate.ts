import axios from "@/lib/axios"
import { useEffect, useState } from "react"

export interface WhatsAppTemplate {
  id: number;
  documentId: string;
  messageTemplate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface WhatsAppTemplateResponse {
  data: WhatsAppTemplate[];
  meta: Record<string, any>;
}

export const useGetWhatsappTemplate = () => {
  const [data, setData] = useState<WhatsAppTemplateResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<WhatsAppTemplateResponse>('/contact-cs-whatsapp-template');
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  return {
    template: data?.data[0]?.messageTemplate || "Halo! Saya ingin bertanya mengenai layanan Maktour",
    isLoading,
    error
  }
}
