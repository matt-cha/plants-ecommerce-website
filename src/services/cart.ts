import apiFetch from "./apiFetch";

type AddPlantToCartParams = {
  plantId: string;
  quantity: number;
  potColor: string;
};
type RemoveItemFromCartParams = {
  itemId: number;
};
export const addPlantToCart = ({
  plantId,
  quantity,
  potColor,
}: AddPlantToCartParams) =>
  apiFetch("POST", `/cart/plants/${plantId}`, {
    quantity,
    pot_color: potColor,
  });

export const getCart = () => apiFetch("GET", "/cart");

export const removeItemFromCart = ({
  itemId,
}: RemoveItemFromCartParams): Promise<Response> => {
  return apiFetch("DELETE", `/cart/${itemId}`);
};
