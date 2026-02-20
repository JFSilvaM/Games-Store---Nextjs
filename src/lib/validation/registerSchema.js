import * as Yup from "yup";

export const initialValues = { username: "", email: "", password: "" };

export const registerSchema = Yup.object({
  username: Yup.string().required(true),
  email: Yup.string().email(true).required(true),
  password: Yup.string().required(true),
});
