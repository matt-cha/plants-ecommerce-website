import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "contexts/SessionContent";
import { useContext, useEffect, useState } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import CartItem from "./CartItem";

type CartItemType = {
  id: string | number;
  image_src: string;
  plant_name: string;
  pot_color: string;
  quantity: number;
  price_per_unit: number;
};
const CartModal = ({
  setCartOpen,
}: {
  setCartOpen: (open: boolean) => void;
}) => {
  const sessionContext = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<CartItemType[]>([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await cartService.getCart();
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    })();
  }, []);
  return (
    <RemoveScroll>
      <div className="fixed backdrop-blur-sm top-0 flex justify-end left-0 w-full h-full bg-black/30">
        <div className="bg-white h-screen w-full max-w-xl">
          <button
            className="absolute top-0 right-0 p-2 "
            onClick={() => setCartOpen(false)}
          >
            <i className=" text-4xl text-emerald-400 fa-regular fa-circle-xmark"></i>
          </button>
          <div className="bg-emerald-800 text-center py-7  shadow-md text-3xl text-white font-playfair">
            {sessionContext?.username}'s Cart'
          </div>
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div>
                {items.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
};
export default CartModal;
