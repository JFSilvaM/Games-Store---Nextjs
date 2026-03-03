import * as Yup from "yup";

export const initialValues = { identifier: "", password: "" };

export const registerSchema = Yup.object({
  identifier: Yup.string().required(true),
  password: Yup.string().required(true),
});
