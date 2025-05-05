import supabase from "@/lib/supabase-client";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    }

    checkSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
