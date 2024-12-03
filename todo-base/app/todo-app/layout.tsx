"use client";

import SignIn from "@/components/SignIn";
import useAuth from "@/hooks/useAuth";

const TodoAppLayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? (
    <div>{children}</div>
  ) : (
    <SignIn />
  )
};
export default TodoAppLayoutComponent;