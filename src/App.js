import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.css";

import { routes } from "./routes";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import { useTheme } from "./hooks/useTheme";
import { useI18n } from "./hooks/useI18n";
import { capitalizeFirstLetter } from "./utils/capitalize";

export default function App() {
  let { theme, toggleTheme } = useTheme();
  let { language, changeLanguage } = useI18n();
  const { t } = useTranslation();

  function onChange(value) {
    changeLanguage(value.target.value);
  }

  return (
    <div>
      <h1>{t("Welcome to React")}</h1>
      {t("Language")}:
      <select onChange={onChange} defaultValue={language}>
        <option value="en">{t("English")}</option>
        <option value="vi">{t("Vietnamese")}</option>
      </select>
      {t("Mode")}:
      <button onClick={toggleTheme}>{t(capitalizeFirstLetter(theme))}</button>
      <hr />
      <Switch>
        {routes.map((route, i) => {
          const LazyComponent = lazy(() =>
            import(`./pages/${route.component}`)
          );
          switch (route.status) {
            case "public":
              return (
                <PublicRoute key={i} path={route.path} exact={route.exact}>
                  <LazyComponent />
                </PublicRoute>
              );
            case "private":
              return (
                <PrivateRoute key={i} path={route.path} exact={route.exact}>
                  <LazyComponent />
                </PrivateRoute>
              );
            default:
              return (
                <Route key={i} path={route.path} exact={route.exact}>
                  <LazyComponent />
                </Route>
              );
          }
        })}
      </Switch>
    </div>
  );
}
