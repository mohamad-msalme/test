import { Method } from "axios";

/**
 * The function `validateStatus` checks if a given HTTP status code is within the range of 200-299 and
 * logs appropriate messages based on the status code.
 * @param {string} url - The `url` parameter is a string that represents the URL of the request being
 * made.
 * @param {Method} method - The `method` parameter is of type `Method`, which is likely an enum or a
 * string type representing the HTTP method used in the request (e.g., "GET", "POST", "PUT", etc.).
 * @param {number} status - The `status` parameter represents the HTTP status code of a response. It is
 * a number that indicates the outcome of a request made to a server.
 * @returns The function `validateStatus` returns a boolean value `result`.
 */
export const validateStatus = (url: string, method: Method, status: number) => {
  const result = status >= 200 && status < 300;
  switch (status) {
    case 200:
      console.info(
        `Successful response (OK) ${method.toUpperCase()} ${url} ${status}`,
      );
      break;
    case 201:
      console.info(
        `Resource created (Created) ${method.toUpperCase()} ${url} ${status}`,
      );
      break;
    case 204:
      console.info(
        `No content (No Content) ${method.toUpperCase()} ${url} ${status}`,
      );
      break;
    case 400:
      console.error(
        `Bad request (Bad Request) ${method.toUpperCase()} ${url} ${status}`,
        true,
        "error",
      );
      break;
    case 401:
      console.error(
        `Invalid Cockepit Authorization Token ${method.toUpperCase()} ${url} ${status}`,
        true,
        "error",
      );
      break;
    case 403:
      console.error(
        `Forbidden (Forbidden) ${method.toUpperCase()} ${url} ${status}`,
      );
      break;
    case 404:
      console.error(
        `Not found (Not Found) ${method.toUpperCase()} ${url} ${status}`,
      );
      break;
    case 500:
      console.error(
        `Internal server error (Internal Server Error) ${method.toUpperCase()} ${url} ${status}`,
      );
      break;
    default: {
      if (result)
        console.info(
          `Successful response ${method.toUpperCase()} ${url} ${status}`,
        );
      else
        console.error(
          `Received status code ${method.toUpperCase()} ${url} ${status}`,
        );
    }
  }
  return result;
};
