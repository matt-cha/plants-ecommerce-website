import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignUpPage";
import SignUpPage from "./pages/auth/SignInPage";
import apiFetch from "./services/apiFetch";

const response = await apiFetch("GET", "/api-key/info");
console.log(response.status);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
