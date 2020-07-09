import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import { useApi } from "../hooks/useApi";
// import Loading from "../components/Loading";

export default function Home() {
  let { email, signout } = useAuth();
  let { t } = useTranslation();
  let { push } = useHistory();
  // let [result, loading] = useApi("https://pokeapi.co/api/v2/pokemon");

  function onLogout() {
    signout();
    push("/login");
  }

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <Fragment>
      {t("HomePage")} <br />
      {t("Hello")} {email},
      <br />
      <button onClick={onLogout}>{t("Logout")}</button>
      <br />
      {/* {JSON.stringify(result, null, 2)} */}
    </Fragment>
  );
}
