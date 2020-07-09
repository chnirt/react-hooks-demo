import React, { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NoMatch() {
  let { pathname } = useLocation();
  let { push } = useHistory();
  const { t } = useTranslation();

  function onBack() {
    push("/");
  }

  return (
    <Fragment>
      <h3>
        {t("No match for")} <code>{pathname}</code>
        <br />
        <button onClick={onBack}>{t("Back")}</button>
      </h3>
    </Fragment>
  );
}
