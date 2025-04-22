import { Plant } from "types/plant";
import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";
import { useState } from "react";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import { getRandomIndex } from "shared-components/util";
const PlantInfoSection = ({ plant }: { plant: Plant }) => {
  const [imageIndex, setImageIndex] = useState(() =>
    getRandomIndex(plant.images)
  );
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="block md:hidden mb-8">
          <PlantHeading plant={plant} />
        </div>
        <img className="rounded-lg" src={plant.images[imageIndex].src}></img>
        <div className="flex mt-4">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px"></div>
          <BenefitBox
            icon="far fa-regular fa-truck-fast"
            title="Free Shipping"
            description="Get free ground shipping on orders over $50"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>

        <p className="text-slate-600 leading-relaxed mt-6">
          {plant.description}
        </p>
        <PlantPurchaseOptions
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          plant={plant}
        ></PlantPurchaseOptions>
      </div>
    </div>
  );
};

export default PlantInfoSection;
