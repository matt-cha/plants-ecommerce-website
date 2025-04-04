import apiFetch from "./apiFetch";

type CreateUserInput = {
  username: string;
  password: string;
};

export const createUser = ({
  username,
  password,
}: CreateUserInput): Promise<Response> =>
  apiFetch("POST", "/users", {
    username,
    password,
  });
