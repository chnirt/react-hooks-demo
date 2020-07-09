import React, { Fragment, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/useAuth";

export default function RegisterPage() {
  let { push } = useHistory();
  let { signup } = useAuth();
  const { t } = useTranslation();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    signup(form.email, form.password);
    push("/login");
  }
  return (
    <Fragment>
      {t("RegisterPage")}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={onChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          security="true"
          value={form.password}
          onChange={onChange}
        />
        <br />
        <button type="submit">{t("Register")}</button>
      </form>
      <br />
      <Link to="/login">-> {t("LoginPage")}</Link>
    </Fragment>
  );
}
