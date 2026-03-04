import { useAuth } from "@/hooks/use-auth";
import { updateUser } from "@/lib/user";
import { initialValues, settingsSchema } from "@/lib/validation/settings-tab";
import { Button } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";

const Settings = () => {
  const { user, setUser } = useAuth();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const updatedValues = {
        ...values,
        email: values.email || undefined,
        repeatEmail: values.repeatEmail || undefined,
      };
      await updateUser(user.id, updatedValues);
      setUser({
        ...user,
        username: values.username,
        email: values.email || user.email,
      });
      resetForm({
        values: {
          ...values,
          email: "",
          repeatEmail: "",
        },
      });
    } catch (error) {
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues(user)}
      onSubmit={handleSubmit}
      validationSchema={settingsSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting, errors }) => (
        <Form noValidate className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex w-1/2 flex-col gap-1">
              <label>Nombre de usuario</label>

              <Field
                id="username"
                name="username"
                placeholder="Nombre de usuario"
                className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.username ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <label>Nombre y apellidos</label>

              <div className="flex gap-2">
                <Field
                  id="firstname"
                  name="firstname"
                  placeholder="Nombre"
                  className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.firstname ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
                />

                <Field
                  id="lastname"
                  name="lastname"
                  placeholder="Apellidos"
                  className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.lastname ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <div className="flex w-full flex-col gap-1">
              <label>Correo electrónico</label>

              <div className="flex flex-col gap-2">
                <Field
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.email ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
                />

                <Field
                  id="repeatEmail"
                  name="repeatEmail"
                  placeholder="Repetir correo electrónico"
                  className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.repeatEmail ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
                />
              </div>
            </div>

            {/* <div className="flex w-full flex-col gap-1">
              <label>Contraseña</label>

              <div className="flex flex-col gap-2">
                <Field
                  id="password"
                  name="password"
                  placeholder="Nueva contraseña"
                  className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.password ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
                />

                <Field
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repetir nueva contraseña"
                  className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.repeatPassword ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
                />
              </div>
            </div> */}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex cursor-pointer justify-center rounded-md bg-orange-600 px-3 py-1.5 font-semibold"
          >
            {isSubmitting ? (
              <ArrowPathIcon className="size-6 animate-spin" />
            ) : (
              "Guardar"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
