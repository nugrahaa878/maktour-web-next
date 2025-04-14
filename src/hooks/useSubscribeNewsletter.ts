import { useState } from 'react';
import axios from '@/lib/axios';
import { useToast } from '@/context/ToastContext';

interface CustomerUser {
  id: number;
  documentId: string;
  email: string;
  name: string | null;
  phoneNumber: string | null;
  isSubscribeEmail: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

const useSubscribeNewsletter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<CustomerUser | null>(null);
  const { showToast } = useToast();

  const subscribeNewsletter = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post<CustomerUser>(
        '/customer-users/subscribe-email',
        { email },
        {
          headers: {
            'x-api-token': 'ofkbg99vBRzfcikgRWnZZyvsHrS0VA9V',
          },
        }
      );

      setData(response.data);
      showToast('Successfully subscribed to newsletter!', 'success');
    } catch (err) {
      const errorMessage = err instanceof Error
        ? err.message
        : 'Failed to subscribe. Please try again.';

      setError(err instanceof Error ? err : new Error(errorMessage));
      showToast(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    subscribeNewsletter,
    isLoading,
    error,
    data,
  };
};

export default useSubscribeNewsletter; 