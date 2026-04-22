import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  };

  const googleRegister = async () => {
    await signInWithPopup(auth, provider);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <br />

      <input type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} />
      <br /><br />

      <button onClick={register}>Register</button>
      <br /><br />
      <button onClick={googleRegister}>Sign up with Google</button>
<br />
      <button onClick={()=>navigate("/")}>Go to Login</button>
    </div>
  );
}