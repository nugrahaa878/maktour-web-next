import axios from "@/lib/axios"
import { useEffect, useState } from "react"

export const useGetBlog = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/blogs');
      setData(response.data);
    }

    fetchData();
  }, [])

  return { data }
}