import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div>
      sign in page
      <Link to={"/sign-up"}>Go to sign up</Link>
    </div>
  );
};
export default SignInPage;
