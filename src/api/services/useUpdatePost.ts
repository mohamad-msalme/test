/* eslint-disable @typescript-eslint/no-unsafe-return */
import { axiosInstance } from "../client/axiosInstanse"; // Update the path
import { useFetchAllPost } from "./useFetchAllPost";
import { useMutation } from "react-query";

type TUpdatePost = {
  id: number;
  input: {
    body: string;
  };
};

/**
 * The function `updatePost` is an asynchronous function that sends a mutation request to update a post
 * with the given ID and input, and returns the updated post's ID and body.
 * @param {TUpdatePost}  - - `id`: The ID of the post to be updated.
 * @returns The function `updatePost` is returning the data received from the API response.
 */
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

/**
 * The `useUpdatePost` function is a custom hook that handles updating a post and triggers a refetch of
 * all posts.
 * @param {number} page - The `page` parameter is used to specify the page number for fetching posts.
 * It is passed to the `useFetchAllPost` hook to fetch posts for a specific page.
 * @returns The function `useUpdatePost` returns a function `handleUpdate`.
 */
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
