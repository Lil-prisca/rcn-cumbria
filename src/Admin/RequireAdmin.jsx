import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function RequireAdmin({ children }) {
  const [status, setStatus] = useState("loading"); // loading | ok | denied

  useEffect(() => {
    async function check() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return setStatus("denied");

      const { data: row } = await supabase
        .from("admins")
        .select("user_id")
        .eq("user_id", session.user.id)
        .maybeSingle();
      setStatus(row ? "ok" : "denied");
    }
    check();

    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") setStatus("denied");
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (status === "loading") return <p className="p-8">Loading…</p>;
  if (status === "denied") return <Navigate to="/admin/login" replace />;
  return children;
}
