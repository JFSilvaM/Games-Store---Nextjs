import * as Yup from "yup";

export const initialValues = () => ({
  title: "",
  name: "",
  address: "",
  city: "",
  state: "",
  postal_code: "",
  phone: "",
});

export const addressSchema = Yup.object({
  title: Yup.string().required(true),
  name: Yup.string().required(true),
  address: Yup.string().required(true),
  city: Yup.string().required(true),
  state: Yup.string().required(true),
  postal_code: Yup.string().required(true),
  phone: Yup.string()
    .matches(/^[0-9]{9}$/, true)
    .required(true),
});
