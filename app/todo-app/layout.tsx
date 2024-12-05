"use client";

import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import Login from "../(auth)/login/page";
import SyncLoader from "react-spinners/SyncLoader";

const TodoAppLayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isAuthenticated = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated !== null) {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SyncLoader color="#9ea7fc" size={25} />
      </div>
    );
  }

  return isAuthenticated ? <div>{children}</div> : <Login />;
};
export default TodoAppLayoutComponent;
