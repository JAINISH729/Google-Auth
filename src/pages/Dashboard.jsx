import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>

<br />
    <h1>WELCOME TO DASHBOARD</h1>
<br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}