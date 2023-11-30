import React from "react";
import Logo from "../components/Logo";
import CompanyTitle from "../components/CompanyTitle";
import Illustration from "../components/Illustration";
import SignInForm from "../components/SignInForm";

const LoginPage: React.FC = () => {
  return (
    <div className="sign">
      <div className="sign-right-side">
        <Logo />
        <CompanyTitle />
        <Illustration />
      </div>
      <SignInForm />
    </div>
  );
};

export { LoginPage as default };
