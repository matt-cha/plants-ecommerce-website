import NavBar from "shared-components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as plantService from "services/plant";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";
import { Plant } from "types/plant";
const PlantShowPage = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState<Plant | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: plantId! });
      const data = await response.json();
      setPlant(data);
      setIsLoading(false);
    })();
  }, [plantId]);
  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-green-50 min-h-screen font-lato">
        <div className="w-full max-w-5xl px-8 py-24">
          {isLoading ? (
            <LoadingSpinner />
          ) : plant ? (
            <PlantInfoSection plant={plant} />
          ) : (
            <div className="text-center text-gray-500">Plant not found.</div>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default PlantShowPage;
