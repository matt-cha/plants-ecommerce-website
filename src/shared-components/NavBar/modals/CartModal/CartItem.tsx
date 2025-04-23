type CartItemType = {
  image_src: string;
  plant_name: string;
  pot_color: string;
  quantity: number;
  price_per_unit: number;
  id: number;
};

type CartItemProps = {
  item: CartItemType;
  fetchCart: () => Promise<void>;
};

import * as cartService from "services/cart";
const CartItem = ({ item, fetchCart }: CartItemProps) => {
  console.log(item);
  return (
    <div className="flex">
      <img className="w-28 rounded-md" src={item.image_src} />
      <div className="flex justify-between flex-1 mx-4">
        <div className="">
          <div className="text-xl font-playfair text-emerald-700">
            {item.plant_name}
          </div>
          <div className="text-slate-500 flex my-1">
            <div className="w-20 text-slate-400">color:</div>
            {item.pot_color}
          </div>
          <div className="text-slate-500 flex my-1">
            <div className="w-20 text-slate-400">quantity:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end ">
          <div className="text-slate-500">
            ${item.quantity * item.price_per_unit}{" "}
          </div>
          <button
            onClick={async () => {
              await cartService.removeItemFromCart({ itemId: item.id });
              fetchCart();
            }}
            className="text-sm text-slate-400 hover:text-red-800"
          >
            <i className="fa-regular mr-1 fa-trash text-base"></i>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
