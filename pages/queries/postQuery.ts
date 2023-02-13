import axios from "axios";
import { useMutation, UseMutationResult } from "react-query";

interface PostDataResponse {
  // define the response shape here
}

const usePostData = (): UseMutationResult<PostDataResponse, unknown, Payload> =>
  useMutation(async (payload: Payload) => {
    const { data } = await axios.post<PostDataResponse>("/api/posts", payload);
    return data;
  });

export default usePostData;
