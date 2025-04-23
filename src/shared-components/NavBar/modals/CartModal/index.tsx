import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "contexts/SessionContent";
import { useContext, useEffect, useState, useCallback } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import CartItem from "./CartItem";

type CartItemType = {
  id: number;
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

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    const data = await response.json();
    setItems(data);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;
  for (const item of items) {
    totalQuantity += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }
  return (
    <RemoveScroll>
      <div className="fixed backdrop-blur-sm top-0 flex justify-end left-0 w-full h-full bg-black/30">
        <div className="flex flex-col bg-white h-screen w-full max-w-xl">
          <button
            className="absolute top-0 right-0 p-2 "
            onClick={() => setCartOpen(false)}
          >
            <i className=" text-4xl text-emerald-400 fa-regular fa-circle-xmark"></i>
          </button>
          <div className="bg-emerald-800 text-center py-7  shadow-md text-3xl text-white font-playfair">
            {sessionContext?.username}'s Cart'
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="flex-1 overflow-y-scroll">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`pt-8 mt-8 mx-5 ${index !== 0 && "border-slate-200 border-t"}`}
                  >
                    <CartItem item={item} fetchCart={fetchCart} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col px-4 border-t pb-4 border-slate-200">
                <div className="flex justify-between py-4 text-slate-400">
                  <div>{totalQuantity} items</div>
                  <div>
                    subtotal
                    <span className="ml-2 text-lg text-slate-500">
                      ${subTotal}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => alert("Checkout clicked")}
                  className="items-center bg-emerald-700 rounded-full text-white flex justify-center py-3 text-lg "
                >
                  Checkout
                  <i className="ml-2 text-2xl fa-regular fa-arrow-right-to-line"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </RemoveScroll>
  );
};
export default CartModal;
