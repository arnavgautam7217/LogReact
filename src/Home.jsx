import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const { user } = useContext(AuthContext);

  if (!user) return <h2>You are not logged in.</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {user.email}</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
