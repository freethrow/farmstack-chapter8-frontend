import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const { user, setUser } = useAuth();
  const removeCookie = async () => {
    const res = await fetch("http://127.0.0.1:3000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };
  const router = useRouter();
  useEffect(() => {
    removeCookie();
    setUser(null);

    router.push("/");
  }, []);

  return <div>logout</div>;
};

export default Logout;
