import { Product } from "@/server/models/product.model";
import { ProductCategory } from "@/type";
import axios from "axios";
import { useQuery, QueryOptions } from "react-query";

type QueryResult<T> = {
  data: T | undefined | ProductCategory[] | Product[];
  isLoading: boolean;
  error: unknown;
  fetchData: () => Promise<void>;
};

const useCustomShowQuery = <T>(
  url: string,
  id: number,
  options?: QueryOptions<T, unknown>
): QueryResult<T> => {
  const queryKey = url;

  const { data, isLoading, error, refetch } = useQuery<T, unknown>(
    queryKey,
    async () => {
      const response = await axios.get(`${url}/${id}`);
      return response.data;
    },
    {
      ...options,
      enabled: false, // set the manual option to true
    }
  );

  const fetchData = async () => {
    try {
      await refetch(); // manually trigger the refetch method to fetch data
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData, // expose the fetchData method to trigger data fetching manually
  };
};

export default useCustomShowQuery;
