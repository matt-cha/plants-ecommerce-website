import apiFetch from "./apiFetch";

export const getPlants = (): Promise<Response> => apiFetch("GET", "/plants");
