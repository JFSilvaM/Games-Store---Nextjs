import * as Yup from "yup";

export const initialValues = (user) => ({
  username: user.username,
  firstname: user.firstname || "",
  lastname: user.lastname || "",
  email: "",
  repeatEmail: "",
  password: "",
  repeatPassword: "",
});

export const settingsSchema = Yup.object().shape(
  {
    username: Yup.string().required(true),
    firstname: Yup.string(),
    lastname: Yup.string(),
    email: Yup.string()
      .email(true)
      .when("repeatEmail", {
        is: (repeatEmail) => !!repeatEmail,
        then: (schema) => schema.required(true),
        otherwise: (schema) => schema.optional(),
      }),
    repeatEmail: Yup.string()
      .email(true)
      .when("email", {
        is: (email) => !!email,
        then: (schema) => schema.required(true).oneOf([Yup.ref("email")], true),
        otherwise: (schema) => schema.optional(),
      }),
    password: Yup.string().when("repeatPassword", {
      is: (repeatPassword) => !!repeatPassword,
      then: (schema) => schema.required(true),
      otherwise: (schema) => schema.optional(),
    }),
    repeatPassword: Yup.string().when("password", {
      is: (password) => !!password,
      then: (schema) =>
        schema.required(true).oneOf([Yup.ref("password")], true),
      otherwise: (schema) => schema.optional(),
    }),
  },
  [
    ["email", "repeatEmail"],
    ["password", "repeatPassword"],
  ],
);
