type CartItemType = {
  image_src: string;
  plant_name: string;
  pot_color: string;
  quantity: number;
  price_per_unit: number;
};
const CartItem = ({ item }: { item: CartItemType }) => {
  return (
    <div className="flex mx-6 my-8">
      <img className="w-28 rounded-md" src={item.image_src} />
      <div className="flex justify-between flex-1 mx-4">
        <div className="">
          <div className="text-xl font-playfair text-emerald-700">
            {item.plant_name}
          </div>
          <div className="text-slate-500 flex my-1">
            <div className="w-14 text-slate-400">color:</div>
            {item.pot_color}
          </div>
          <div className="text-slate-500 flex my-1">
            <div className="w-14 text-slate-400">quantity:</div>
            {item.quantity}
          </div>
        </div>
        <div className="text-slate-500">
          ${item.quantity * item.price_per_unit}{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
