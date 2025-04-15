import { Plant, PlantImage } from "types/plant";
import { useState } from "react";

import { Link } from "react-router-dom";
import { POT_COLORS, getRandomIndex } from "shared-components/util";

const PlantItem = ({ plant }: { plant: Plant }) => {
  const [imageIndex, setImageIndex] = useState(() =>
    getRandomIndex<PlantImage>(plant.images)
  );
  return (
    <div className=" mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
        <img
          className="w-[280px] h-[320px] rounded-md"
          src={plant.images[imageIndex].src}
        />
      </Link>
      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIndex].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, index) => (
            <div
              className={`rounded-full border border-slate-300 w-5 h-5 mx-[3px] ${POT_COLORS[image.pot_color]} ${imageIndex === index && "outline outline-slate-400 outline-offset-2"}`}
              key={index}
              onMouseEnter={() => setImageIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PlantItem;
