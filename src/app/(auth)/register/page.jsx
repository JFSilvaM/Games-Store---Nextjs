import RegisterForm from "@/components/auth/register-form";
import Link from "next/link";

const RegisterPage = () => (
  <div className="w-2/3">
    <h3 className="mb-5 font-semibold">Crear cuenta</h3>

    <RegisterForm />

    <div className="mt-2.5 text-center">
      <Link href="/login">Atrás</Link>
    </div>
  </div>
);

export default RegisterPage;
