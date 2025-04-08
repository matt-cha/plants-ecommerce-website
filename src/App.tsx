import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import { useState } from "react";
import * as userService from "services/user";
import { jwtDecode, JwtPayload } from "jwt-decode";
import SessionContext from "contexts/SessionContent";
type SessionJwtPayLoad = JwtPayload & {
  username: string;
};
const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    userService.getSessionTokenStorage()
  );

  return (
    <SessionContext.Provider
      value={{
        username: sessionToken
          ? (jwtDecode(sessionToken) as SessionJwtPayLoad).username
          : null,
        signIn: (token) => {
          setSessionToken(token);
          userService.setSessionTokenStorage(token);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSessionTokenStorage();
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
