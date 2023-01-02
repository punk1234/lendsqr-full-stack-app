import { AppLogo, LoginForm } from "../../components";
import "./Login.css";

const SIGN_IN_IMAGE_URL = "/images/pablo-sign-in-1.svg";

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LoginPage__illustration_panel">
        <AppLogo size={144.8} />

        <br />

        <img
          className="LoginPage__illustration_image"
          src={SIGN_IN_IMAGE_URL}
          alt="SIGN-IN IMAGE ILLUSTRATION"
        />
      </div>

      <LoginForm />
    </div>
  );
}

export default LoginPage;