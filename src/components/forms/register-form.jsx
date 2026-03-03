"use client";

import { ENV } from "@/config/env";
import { loginAndRegister } from "@/lib/auth";
import { initialValues, registerSchema } from "@/lib/validation/registerSchema";
import { Button } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await loginAndRegister(ENV.ENDPOINTS.AUTH.REGISTER, values);
      resetForm();
      router.push("/login");
    } catch (error) {
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting, errors }) => (
        <Form noValidate className="flex flex-col gap-4">
          <Field
            id="username"
            name="username"
            placeholder="Nombre de usuario"
            className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.username ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
          />

          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Correo electrónico"
            className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.email ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
          />

          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.password ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex cursor-pointer justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold"
          >
            {isSubmitting ? (
              <ArrowPathIcon className="size-6 animate-spin" />
            ) : (
              "Registrarse"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
