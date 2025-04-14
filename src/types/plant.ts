export type PotColor = "stone" | "slate" | "sky" | "black" | "white" | "amber";

export type PlantImage = {
  src: string;
  pot_color: PotColor;
};

export type Plant = {
  name: string;
  price: number;
  images: PlantImage[];
};
