import { POT_COLORS } from "shared-components/util";
import { Plant } from "types/plant";
import { useState } from "react";
import * as cartService from "services/cart";
type PlantPurchaseOptionsProps = {
  plant: Plant;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
};
const PlantPurchaseOptions = ({
  plant,
  imageIndex,
  setImageIndex,
}: PlantPurchaseOptionsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="my-10">
        <div className="text-emerald-700 flex ">
          <i className="mr-2 fa-solid fa-brush text-2xl"></i>
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="flex my-4 ">
          {plant.images.map((image, index) => (
            <div
              className="mx-2 items-center flex flex-col"
              key={image.pot_color}
              onMouseEnter={() => setImageIndex(index)}
            >
              <div
                className={`rounded-full w-10 h-10 ${imageIndex === index && "outline outline-offset-2 outline-slate-500"} ${POT_COLORS[image.pot_color]}`}
              ></div>
              <div
                className={`mt-1 ${imageIndex === index ? "text-slate-700" : "text-slate-500"}`}
              >
                {image.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex ">
        <div className="rounded-full px-3 py-4 flex text-xl border-2 border-slate-300 text-slate-500 items-center">
          <button
            onClick={() => {
              if (quantity === 1) {
                return;
              }
              setQuantity(quantity - 1);
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          onClick={async () => {
            setIsLoading(true);
            await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIndex].pot_color,
            });
            setIsLoading(false);
          }}
          className="flex-1 ml-2 rounded-full hover:bg-emerald-800 bg-emerald-700 justify-center items-center text-white text-xl "
        >
          {isLoading ? (
            <i className="text-2xl mr-2 fa-solid fa-spinner animate-spin"></i>
          ) : (
            <i className="text-2xl mr-2 fa-solid fa-cart-plus"></i>
          )}
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
