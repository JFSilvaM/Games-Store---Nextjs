"use client";

import Button from "@/components/button";
import {
  initialValues,
  validationSchema,
} from "@/features/auth/forms/register.form";
import { useFormik } from "formik";

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <form action={formik.handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          placeholder="Correo eletrónico"
          value={formik.values.email}
          onChange={formik.handleChange}
          className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${formik.errors.email ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-500 focus:outline-orange-600"}`}
        />

        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          placeholder="Nombre de usuario"
          value={formik.values.username}
          onChange={formik.handleChange}
          onError={() => formik.errors.username}
          className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${formik.errors.username ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-500 focus:outline-orange-600"}`}
        />

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Nombre y apellidos"
          value={formik.values.name}
          onChange={formik.handleChange}
          onError={() => formik.errors.name}
          className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${formik.errors.name ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-500 focus:outline-orange-600"}`}
        />

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          onError={() => formik.errors.password}
          className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${formik.errors.password ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-500 focus:outline-orange-600"}`}
        />
      </div>

      <Button type="submit">Registrarse</Button>
    </form>
  );
};
