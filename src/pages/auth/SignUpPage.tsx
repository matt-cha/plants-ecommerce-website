import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { useState } from "react";
import * as userService from "services/user";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";
const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>

        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            {
              label: "password",
              type: "password",
            },
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          submitButtonLabel="create account"
          onSubmit={async (values) => {
            if (values.username.length < 4) {
              setError("Username too short");
              return;
            }
            if (values.password.length < 4) {
              setError("Passowrd too short");
              return;
            }
            if (values.password !== values["confirm password"]) {
              setError("Passwords do not match");
              return;
            }

            const response = await userService.createUser({
              username: values.username,
              password: values.password,
            });

            if (response.status === 201) {
              navigate("/", {
                state: {
                  accountCreated: true,
                },
              });
              setError("");
            } else {
              const data = await response.json();
              setError(data.error);
            }
          }}
        />
        <Link to="/" className="text-sm text-green-600 underline">
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignUpPage;
