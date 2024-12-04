"use client";

import useAuth from "@/hooks/useAuth";
import Login from "../(auth)/login/page";

const TodoAppLayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? (
    <div>{children}</div>
  ) : (
    <Login />
  )
};
export default TodoAppLayoutComponent;