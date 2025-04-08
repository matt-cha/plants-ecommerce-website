import apiFetch from "./apiFetch";

type UserInput = {
  username: string;
  password: string;
};

export const createUser = ({
  username,
  password,
}: UserInput): Promise<Response> =>
  apiFetch("POST", "/users", {
    username,
    password,
  });

export const createSession = ({ username, password }: UserInput) =>
  apiFetch("POST", "/users/session", { username, password });
