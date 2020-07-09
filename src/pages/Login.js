import React, { Fragment, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/useAuth";
import { loginValidationSchema } from "../validator/loginValidationSchema";

export default function Login() {
  const [error, setError] = useState("");

  let { replace } = useHistory();
  let { state } = useLocation();
  let { signin } = useAuth();
  const { t } = useTranslation();
  let { from } = state || { from: { pathname: "/" } };
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: ""
    },
    validationSchema: loginValidationSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      const result = signin(values.email, values.password);
      if (result) {
        replace(from);
      } else {
        setError("Email or password is incorrect");
      }
    }
  });

  return (
    <Fragment>
      {t("LoginPage")}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email = admin@gmail.com"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
        <br />
        <input
          type="password"
          name="password"
          placeholder="password = 0"
          security="true"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password ? (
          <span style={{ color: "red" }}>{errors.password}</span>
        ) : null}
        <br />
        <button type="submit">{t("Login")}</button>
        <br />
        {error ? <span style={{ color: "red" }}>{error}</span> : null}
      </form>
      <br />
      <Link to="/register">-> {t("RegisterPage")}</Link>
    </Fragment>
  );
}
