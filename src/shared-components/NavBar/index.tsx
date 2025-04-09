import SessionContext from "contexts/SessionContent";
import { useContext, useState } from "react";

const NavBar = () => {
  const sessionContext = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  return (
    <nav
      onMouseLeave={() => setUserMenuOpen(false)}
      className="bg-emerald-800 flex justify-center font-lato"
    >
      <div className="w-full max-w-5xl flex items-center justify-between px-8 py-2">
        <div className="font-playfair text-white text-2xl flex flex-col items-center">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          Plants
        </div>
        <div className=" flex-1 flex justify-end">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
