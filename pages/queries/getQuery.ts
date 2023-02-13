import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";

interface ApiResponse {
  // define your response schema here
}

const useCustomQuery = <T = ApiResponse>(
  url: string,
  key = "default-query-key",
  options?: UseQueryOptions<AxiosResponse<T>>
) => {
  return useQuery<AxiosResponse<T>>(
    key,
    async () => {
      const response = await axios.get<T>(url);
      const data = response.data;
      return data;
    },
    options
  );
};

export default useCustomQuery;
