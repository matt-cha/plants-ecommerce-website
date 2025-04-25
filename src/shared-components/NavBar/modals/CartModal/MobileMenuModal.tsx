import SessionContext from "contexts/SessionContent";
import { useContext } from "react";
type MobileMenuModalProps = {
  onCartOpenClick: () => void;
};
const MobileMenuModal = ({ onCartOpenClick }: MobileMenuModalProps) => {
  const sessionContext = useContext(SessionContext);
  return (
    <div className="bg-emerald-800 items-start pb-6 rounded-bl-lg shadow-md text-emerald-200 flex text-lg flex-col pt-12 pr-12">
      <div className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-user"></i>
        {sessionContext?.username}
      </div>
      <button onClick={sessionContext?.signOut} className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket"></i>
        sign out
      </button>
      <button onClick={onCartOpenClick} className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i>
        cart
      </button>
    </div>
  );
};

export default MobileMenuModal;
