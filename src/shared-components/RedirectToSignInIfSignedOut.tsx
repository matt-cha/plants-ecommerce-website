import { useContext, useEffect, ReactNode } from "react";
import SessionContext from "contexts/SessionContent";
import { useNavigate } from "react-router-dom";
type RedirectToSignInIfSignedOut = {
  children: ReactNode;
};
const RedirectToSignInIfSignedOut = ({
  children,
}: RedirectToSignInIfSignedOut) => {
  const sessionContext = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionContext?.username) {
      navigate("/");
    }
  }, [sessionContext?.username, navigate]);

  return children;
};

export default RedirectToSignInIfSignedOut;
