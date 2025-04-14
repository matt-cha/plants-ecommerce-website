import * as userService from "services/user";
const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const apiFetch = (
  method: HTTPMethod,
  path: string,
  body?: unknown
): Promise<Response> => {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${VITE_API_KEY}`,
    "Content-Type": "application/json",
  };
  const options: RequestInit = {
    method,
    credentials: "include",
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const sessionToken = userService.getSessionTokenStorage();
  if (sessionToken) {
    headers["Capstone-Session"] = sessionToken;
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
