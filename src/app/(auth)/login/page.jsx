import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

export const metadata = { title: "Iniciar sesión" };

const LoginPage = () => (
  <div className="w-2/3">
    <h3 className="mb-5 font-semibold">Iniciar sesión</h3>

    <LoginForm />

    <div className="mt-2.5 text-center">
      <Link href="/register">¿No tienes una cuenta?</Link>
    </div>
  </div>
);

export default LoginPage;
