import RegisterForm from "@/components/forms/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-2/3">
      <h3 className="mb-5 font-semibold">Crear cuenta</h3>

      <RegisterForm />

      <div className="mt-2.5 text-center">
        <Link href="/login">Atrás</Link>
      </div>
    </div>
  );
}
