import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import { useEffect, useState } from "react";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import { Plant } from "types/plant";
import LoadingSpinner from "shared-components/LoadingSpinner";
import { motion } from "framer-motion";
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
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="text-4xl font-playfair text-emerald-800 mb-6 px-4">
                Plants in Stock
              </div>
              <div className="flex flex-wrap">
                {plants.map((plant, index) => (
                  <motion.div
                    key={plant.name}
                    initial={{ opacity: 0, translateY: "20px" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{
                      delay: 0.3 + (index % 3) * 0.2,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                  >
                    <PlantItem plant={plant} />
                  </motion.div>
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
