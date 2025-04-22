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

export const setSessionTokenStorage = (capstoneSessionToken: string) =>
  localStorage.setItem("capstone_session_token", capstoneSessionToken);

export const getSessionTokenStorage = () =>
  localStorage.getItem("capstone_session_token");

export const removeSessionTokenStorage = () =>
  localStorage.removeItem("capstone_session_token");
