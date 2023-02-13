import axios from "axios";
import { useQuery, QueryOptions } from "react-query";

type QueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
};

const useCustomQuery = <T>(
  url: string,
  options?: QueryOptions<T, unknown>
): QueryResult<T> => {
  const queryKey = url;

  const { data, isLoading, error } = useQuery<T, unknown>(
    queryKey,
    async () => {
      const response = await axios.get(url);
      return response.data;
    },
    options
  );

  return {
    data,
    isLoading,
    error,
  };
};

export default useCustomQuery;
