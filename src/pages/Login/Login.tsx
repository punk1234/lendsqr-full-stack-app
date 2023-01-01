import { LoginForm } from "../../components";
import "./Login.css";

const LENDSQR_LOGO_URL = "/images/lendsqr-logo.svg";
const SIGN_IN_IMAGE_URL = "/images/pablo-sign-in-1.svg";

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LoginPage__illustration_panel">
        <img
          src={LENDSQR_LOGO_URL}
          alt="LENDSQR LOGO"
        />

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