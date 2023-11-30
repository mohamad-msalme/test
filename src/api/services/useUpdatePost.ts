import { axiosInstance } from "../client/axiosInstanse"; // Update the path
import { useFetchAllPost } from "./useFetchAllPost";
import { useMutation } from "react-query";

type TUpdatePost = {
  id: number;
  input: {
    body: string;
  };
};

const updatePost = async ({ id, input }: TUpdatePost) => {
  const response = await axiosInstance.post("", {
    query: `
    mutation (
        $id: ID!,
        $input: UpdatePostInput!
      ) {
        updatePost(id: $id, input: $input) {
          id
          body
        }
      }
    `,
    variables: {
      id,
      input,
    },
  });
  return response.data;
};

export const useUpdatePost = (page: number) => {
  const { refetch } = useFetchAllPost(page);

  const mutation = useMutation(updatePost, {
    onSuccess: () => refetch(),
  });

  const handleUpdate = async ({ id, input }: { id: number; input: string }) => {
    await mutation.mutateAsync({
      id: Number(id),
      input: {
        body: input,
      },
    });
  };

  return handleUpdate;
};
