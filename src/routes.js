export const routes = [
  {
    label: "Register",
    path: "/register",
    component: "Register",
    status: "public"
  },
  {
    label: "Login",
    path: "/login",
    component: "Login",
    status: "public"
  },
  {
    label: "App",
    path: "/",
    component: "Home",
    status: "private",
    private: true,
    exact: true
  },
  {
    label: "NoMatch",
    path: "*",
    component: "NoMatch",
    status: "notfound",
    notfound: true
  }
];
