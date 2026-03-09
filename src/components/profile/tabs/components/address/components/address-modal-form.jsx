import { useAuth } from "@/hooks/use-auth";
import { createAddress, updateAddress } from "@/lib/address";
import {
  addressSchema,
  initialValues,
} from "@/lib/validation/profile-tabs/address";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";

const AddressModalForm = ({
  isOpen,
  onOpenClose,
  onReload,
  title,
  address,
}) => {
  const { user } = useAuth();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (address) {
        await updateAddress(values, address.documentId);
      } else {
        await createAddress(values, user.id);
      }

      onReload();
      onOpenClose();
    } catch (error) {
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const phoneFieldRestriction = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 9);
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="fixed inset-0 z-10 flex items-center justify-center p-4"
      onClose={onOpenClose}
    >
      <DialogPanel
        transition
        className="flex min-w-2xl flex-col gap-3 rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
      >
        <DialogTitle as="h3" className="text-3xl uppercase">
          {title}
        </DialogTitle>

        <Formik
          initialValues={initialValues(address)}
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
                  onInput={phoneFieldRestriction}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex w-1/3 cursor-pointer justify-center self-end rounded-md bg-orange-600 px-8 py-1.5 font-semibold outline-none"
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
      </DialogPanel>
    </Dialog>
  );
};

export default AddressModalForm;
