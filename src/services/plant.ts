import apiFetch from "./apiFetch";

export const getPlants = (): Promise<Response> => apiFetch("GET", "/plants");

export const getPlantById = ({ id }: { id: string }): Promise<Response> =>
  apiFetch("GET", `/plants/${id}`);
