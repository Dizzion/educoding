"use client";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../../lib/actions";
import { useRouter } from "next/navigation";

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>
        {errorMessage ? (
          <img onLoad={() => useRouter().push("/")} alt="Redirecting" />
        ) : (
          <p>Error getting logged in.</p>
        )}
      </div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  );
}
