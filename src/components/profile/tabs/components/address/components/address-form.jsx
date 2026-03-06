import { useAuth } from "@/hooks/use-auth";
import { createAddress } from "@/lib/address";
import {
  addressSchema,
  initialValues,
} from "@/lib/validation/profile-tabs/address";
import { Button } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";

const AddressForm = ({ onOpenClose }) => {
  const { user } = useAuth();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createAddress(values, user.id);
      onOpenClose();
    } catch (error) {
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues()}
      onSubmit={handleSubmit}
      validationSchema={addressSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting, errors }) => (
        <Form noValidate className="flex flex-col gap-4">
          <Field
            id="title"
            name="title"
            placeholder="Título de la dirección"
            className={`rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.title ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
          />

          <div className="flex gap-2">
            <Field
              id="name"
              name="name"
              placeholder="Nombre y apellidos"
              className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.name ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
            />

            <Field
              id="address"
              name="address"
              placeholder="Dirección"
              className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.address ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
            />
          </div>

          <div className="flex gap-2">
            <Field
              id="state"
              name="state"
              placeholder="Provincia"
              className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.state ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
            />

            <Field
              id="city"
              name="city"
              placeholder="Ciudad"
              className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.city ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
            />
          </div>

          <div className="flex gap-2">
            <Field
              id="postal_code"
              name="postal_code"
              placeholder="Código postal"
              className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.postal_code ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
            />

            <Field
              id="phone"
              name="phone"
              type="tel"
              placeholder="Teléfono"
              className={`w-full rounded-md bg-white/5 px-3 py-1.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.phone ? "outline-red-600 placeholder:text-red-200 focus:outline-red-600" : "outline-white/10 placeholder:text-gray-400 focus:outline-orange-600"}`}
              onInput={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 9);
              }}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex w-1/3 cursor-pointer justify-center self-end rounded-md bg-orange-600 px-8 py-1.5 font-semibold"
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

export default AddressForm;
