"use client";

import { ENV } from "@/config/env";
import { useAuth } from "@/hooks/use-auth";
import { loginAndRegister } from "@/lib/auth";
import { initialValues, registerSchema } from "@/lib/validation/loginSchema";
import { Button } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const { login } = useAuth();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const result = await loginAndRegister(ENV.ENDPOINTS.AUTH.LOGIN, values);
      login(result.jwt);
      resetForm();
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
            id="identifier"
            name="identifier"
            placeholder="Correo electrónico o nombre de usuario"
            className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.identifier ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
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
            className="flex cursor-pointer justify-center rounded-md bg-orange-600 px-3 py-1.5 font-semibold"
          >
            {isSubmitting ? (
              <ArrowPathIcon className="size-6 animate-spin" />
            ) : (
              "Entrar"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
