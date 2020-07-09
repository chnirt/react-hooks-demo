import { useState, useEffect } from "react";

export function useAuth() {
  const [users, setUsers] = useState([
    { email: "admin@gmail.com", password: "0" },
    { email: "mod@gmail.com", password: "0" }
  ]);
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState(window.localStorage.getItem("email"));
  const [isAuth, setIsAuth] = useState(
    !!window.localStorage.getItem("access-token")
  );

  const signin = (email, password) => {
    const response = users.some(
      item => item.email === email && item.password === password
    );

    if (response) {
      const token = email + password;
      window.localStorage.setItem("access-token", token);
      window.localStorage.setItem("email", email);
      setUser({ email, password });
      setIsAuth(true);
      setEmail(email);
      return true;
    } else {
      return false;
    }
  };

  const signup = (email, password) => {
    setUsers([...users, { email, password }]);
  };

  const signout = () => {
    window.localStorage.removeItem("access-token");
    window.localStorage.removeItem("email");
    setIsAuth(false);
  };

  useEffect(() => {}, []);

  return {
    isAuth,
    user,
    email,
    signin,
    signup,
    signout
  };
}
