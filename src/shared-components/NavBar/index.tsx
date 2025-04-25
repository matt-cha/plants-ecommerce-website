import SessionContext from "contexts/SessionContent";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/CartModal/MobileMenuModal";
const NavBar = () => {
  const sessionContext = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        onMouseLeave={() => setUserMenuOpen(false)}
        className="bg-emerald-800 flex justify-center font-lato"
      >
        <div className="w-full max-w-5xl flex items-center justify-between px-8 py-2">
          <Link to="/plants">
            <div className="font-playfair text-white text-2xl flex flex-col items-center">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
              />
              Plants
            </div>
          </Link>
          <div className="hidden sm:flex flex-1 justify-end">
            <div className="relative min-w-32">
              <button
                className="text-emerald-200"
                onClick={() => setUserMenuOpen(true)}
              >
                <i className="mr-2 text-xl fa-solid fa-user" />
                {sessionContext?.username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-[-46px] left-0 bg-white rounded-md shadow-md">
                  <button
                    className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                    onClick={() => sessionContext?.signOut()}
                  >
                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                    sign out
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="text-emerald-200 flex items-center"
            >
              <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>
              cart
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex sm:hidden"
          >
            <i className="fa-solid fa-bars text-4xl text-emerald-400 "></i>
          </button>
        </div>
      </nav>

      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal setCartOpen={setCartOpen} />
      </ModalWrapper>
      <ModalWrapper
        isOpen={mobileMenuOpen}
        onCloseClick={() => setMobileMenuOpen(false)}
      >
        <MobileMenuModal
          onCartOpenClick={() => {
            setCartOpen(true);
            setMobileMenuOpen(false);
          }}
        />
      </ModalWrapper>
    </>
  );
};

export default NavBar;
