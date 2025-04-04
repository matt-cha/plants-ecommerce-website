
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignInPage from "./pages/auth/SignUpPage"
import SignUpPage from "./pages/auth/SignInPage"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App