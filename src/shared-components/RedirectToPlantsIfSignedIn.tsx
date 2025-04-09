import { useContext, useEffect, ReactNode } from "react";
import SessionContext from "contexts/SessionContent";
import { useNavigate } from "react-router-dom";
type RedirectToPlantsIfSignedInProps = {
  children: ReactNode;
};
const RedirectToPlantsIfSignedIn = ({
  children,
}: RedirectToPlantsIfSignedInProps) => {
  const sessionContext = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionContext?.username) {
      navigate("/plants");
    }
  }, [sessionContext?.username, navigate]);

  return children;
};

export default RedirectToPlantsIfSignedIn;
