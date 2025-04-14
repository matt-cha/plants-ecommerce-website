import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import { useEffect, useState } from "react";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import { Plant } from "types/plant";

const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState<Plant[]>([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data: Plant[] = await response.json();
      setPlants(data);
      setIsLoading(false);
    })();
  }, []);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <div className="flex justify-center pt-40 ">
            <i className="fa-duotone fa-spinner-third text-3xl text-emerald-600 animate-spin"></i>
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="text-4xl font-playfair text-emerald-800 mb-6 px-4">
                Plants in Stock
              </div>
              <div className="flex flex-wrap">
                {plants.map((plant, index) => (
                  <PlantItem key={plant.name} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
