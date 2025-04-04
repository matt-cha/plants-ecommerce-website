import AuthForm from "./AuthForm";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center">
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
        ]}
        submitButtonLabel="sign in"
      />
    </div>
  );
};

export default SignInPage;
