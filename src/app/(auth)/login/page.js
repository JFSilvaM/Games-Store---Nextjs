import LoginForm from "@/components/forms/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-2/3">
      <h3 className="mb-5 font-semibold">Iniciar sesión</h3>

      <LoginForm />

      <div className="mt-2.5 text-center">
        <Link href="/register">¿No tienes una cuenta?</Link>
      </div>
    </div>
  );
}
