import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "../../lib/actions";
import { useState } from "react";

export default function Signup() {
    const [errorMessage, dispatch] = useFormState(createUser, undefined);
    const [validation, setValidation] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form action={dispatch}>
            <input type="email" name="email" placeholder="Email" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required />
            <input value={validation} onChange={(e) => setValidation(e.target.value)} type="passwordValidation" name="passwordValidation" placeholder="Confirm Password" required />
            <div>{errorMessage && <p>{errorMessage}</p>}</div>
            <SignupButton />
        </form>
    )
}

function SignupButton() {
    const { pending } = useFormStatus();

    return (
        <button aria-disabled={pending} type="submit">
            Sign Up
        </button>
    )
}