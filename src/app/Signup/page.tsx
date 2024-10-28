"use client";
import { createUser } from "../../lib/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(user.password != user.passwordConfirm) {
      setError(true);
      return;
    }
    setError(false);
    console.log(user);
    console.log(await createUser(user));
    setUser({ email: "", password: "", passwordConfirm: "" });
    router.push("/Login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={user.email}
        onChange={(e) =>
          setUser({
            email: e.target.value,
            password: user.password,
            passwordConfirm: user.passwordConfirm,
          })
        }
        name="email"
        placeholder="Email"
        required
      />
      <input
        value={user.password}
        onChange={(e) =>
          setUser({
            email: user.email,
            password: e.target.value,
            passwordConfirm: user.passwordConfirm,
          })
        }
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <input
        value={user.passwordConfirm}
        onChange={(e) =>
          setUser({
            email: user.email,
            password: user.password,
            passwordConfirm: e.target.value,
          })
        }
        type="password"
        name="passwordValidation"
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
