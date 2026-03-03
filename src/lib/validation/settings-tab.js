import * as Yup from "yup";

export const initialValues = (user) => ({
  firstname: user.firstname || "",
  lastname: user.lastname || "",
  // email: user.email,
});

export const settingsSchema = Yup.object({
  firstname: Yup.string(),
  lastname: Yup.string(),
  // email: Yup.string().email(true).required(true),
});
