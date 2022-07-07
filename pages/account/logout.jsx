import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const logout = () => {
  const [message, setMessage] = useState("");
  const removeCookie = async () => {
    const res = await fetch("http://127.0.0.1:3000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const message = await res.json();
    setMessage(message);
  };
  const router = useRouter();
  useEffect(() => {
    removeCookie();
    router.push("/");
  }, [message]);

  return <div>logout</div>;
};

export default logout;
