"use client";
import { useState } from "react";
import { authenticate } from "../../lib/actions";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await authenticate(user);
    if (res === "Failed to validate credentials") {
      setError(true);
      return;
    }
    setUser({
      email: "",
      password: "",
    });
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={(e) =>
          setUser({ email: e.target.value, password: user.password })
        }
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={(e) =>
          setUser({ email: user.email, password: e.target.value })
        }
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
