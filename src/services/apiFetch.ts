const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const apiFetch = (
  method: HTTPMethod,
  path: string,
  body?: unknown
): Promise<Response> => {
  const options: RequestInit = {
    method,
    credentials: "include",
    headers: {
      Authorization: "Bearer " + VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
