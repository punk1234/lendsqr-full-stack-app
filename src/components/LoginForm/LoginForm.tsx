import { useState } from "react";

import "./LoginForm.css";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  return (
    <div className="LoginForm">
      <h1>Welcome!</h1>
      <div>Enter details to login.</div>

      <form>
        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <span>FORGOT PASSWORD?</span>

        <input
          type="submit"
          value="LOG IN"
        />
      </form>
    </div>
  );
}