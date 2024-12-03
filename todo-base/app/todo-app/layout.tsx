import SignIn from "@/components/SignIn";

const TodoAppLayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <div>{children}</div>
  ) : (
    <SignIn />
  )
};
export default TodoAppLayoutComponent;