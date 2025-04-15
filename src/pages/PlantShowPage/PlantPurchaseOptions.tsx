import { POT_COLORS } from "shared-components/util";
import { Plant } from "types/plant";
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
  console.log(plant);
  return (
    <div className="my-10">
      <div className="text-emerald-700 flex ">
        <i className="mr-2 fa-solid fa-brush text-2xl"></i>
        <div className="text-lg">Pot Colors</div>
      </div>
      <div className="flex my-4 ">
        {plant.images.map((image, index) => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
