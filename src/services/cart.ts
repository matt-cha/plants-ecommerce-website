import apiFetch from "./apiFetch";

type AddPlantToCartParams = {
  plantId: string;
  quantity: number;
  potColor: string;
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
