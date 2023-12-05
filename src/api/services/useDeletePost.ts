/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useMutation } from "react-query";
import { axiosInstance } from "../client/axiosInstanse";

/**
 * The `deletePost` function is an asynchronous function that sends a mutation request to delete a post
 * with the specified ID.
 * @param {string} postId - The `postId` parameter is the ID of the post that you want to delete.
 * @returns the result of the `deletePost` mutation.
 */
const deletePost = async (postId: string) => {
  const response = await axiosInstance.post("", {
    query: `
    mutation (
        $id: ID!
      ) {
        deletePost(id: $id)
      }
    `,
    variables: {
      id: Number(postId),
    },
  });
  return response.data?.data?.deletePost;
};

/**
 * The `useDeletePost` function is a custom hook that returns a function to handle the deletion of a
 * post using a mutation.
 * @returns The `handleDelete` function is being returned.
 */
export const useDeletePost = () => {
  const mutation = useMutation(deletePost);
  const handleDelete = async (postId: string) => {
    try {
      await mutation.mutateAsync(postId);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return handleDelete;
};
