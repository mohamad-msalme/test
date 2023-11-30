// @ts-nocheck

import { useQuery } from "react-query";
import { axiosInstance } from "../client/axiosInstanse";

interface Post {
  id: number;
  body: string;
  title: string;
  user: {
    name: string;
    email: string;
  };
}

interface ApiResponse {
  data: {
    posts: {
      data: Post[];
      meta: {
        totalCount: number;
      };
    };
  };
}

/**
 * The function fetchAllPosts retrieves a paginated list of posts along with user information from an
 * API.
 * @param {number} page - The `page` parameter is used to specify the page number of the posts to
 * fetch. It is used in the pagination options to determine which page of posts to retrieve.
 * @returns The fetchAllPosts function returns an object with two properties: "rows" and "totalCount".
 * The "rows" property is an array of posts, where each post object includes the post details (id,
 * body, title) as well as the user details (name, email, username, phone, website). The "totalCount"
 * property represents the total number of posts.
 */
const fetchAllPosts = async (page: number) => {
  const response = await axiosInstance.post<ApiResponse>("", {
    query: `
      query ($options: PageQueryOptions) {
        posts(options: $options) {
          data {
            id
            body
            title
            user {
                name
                email
                username
                phone
                website
              }
          }
          meta {
            totalCount
          }
        }
      }
    `,
    variables: {
      options: {
        paginate: {
          page,
          limit: 10,
        },
      },
    },
  });
  return {
    rows: response.data.data.posts.data.map((item) => ({
      ...item,
      ...item.user,
    })),
    totalCount: response.data.data.posts.meta.totalCount,
  };
};

/**
 * The function `useFetchAllPost` is a custom hook that uses the `useQuery` hook from a library to
 * fetch all posts based on the specified page number.
 * @param {number} page - The `page` parameter is a number that represents the page number for fetching
 * posts. It is used to determine which page of posts to fetch from the server.
 */
export const useFetchAllPost = (page: number) =>
  useQuery<{ totalCount: number; rows: Post[] }>(
    ["fetchAllPosts", page],
    fetchAllPosts.bind(undefined, page),
  );
