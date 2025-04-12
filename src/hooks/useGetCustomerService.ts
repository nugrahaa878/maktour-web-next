import axios from "@/lib/axios"
import { useState, useEffect } from 'react';

interface CustomerServicePhoto {
  id: number;
  alternativeText: string | null;
  photo: {
    id: number;
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
  };
}

export interface CustomerService {
  id: number;
  documentId: string;
  name: string;
  title: string | null;
  phoneNumber: string;
  photo: CustomerServicePhoto;
}

interface CustomerServiceResponse {
  data: CustomerService[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const useGetCustomerService = () => {
  const [customerServices, setCustomerServices] = useState<CustomerService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<CustomerServiceResponse>('/customer-service-contacts');
        setCustomerServices(response.data.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return { customerServices, loading, error };
};
