"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

import Login from "../(auth)/login/page";

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
      <div className="flex h-screen items-center justify-center">
        <SyncLoader color="#9ea7fc" size={25} />
      </div>
    );
  }

  return isAuthenticated ? <div>{children}</div> : <Login />;
};
export default TodoAppLayoutComponent;
