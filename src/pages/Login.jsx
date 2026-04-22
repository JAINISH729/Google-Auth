import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <br />

      <input type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} />
      <br /><br />

      <button onClick={login}>Login</button>
      <br /><br />
      <button onClick={googleLogin}>Sign in with Google</button>
<br />
      <button onClick={()=>navigate("/register")}>Go to Register</button>
    </div>
  );
}