import { RegisterForm } from "@/features/auth/components/register-fom";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="w-2/3">
      <h3 className="mb-5">Crear cuenta</h3>

      <RegisterForm />

      <div className="mt-2.5 text-center">
        <Link href="/login">Atrás</Link>
      </div>
    </div>
  );
}
