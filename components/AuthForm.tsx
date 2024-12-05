import React from "react";

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  onSubmit,
  loading = false,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="grid w-[250px] min-w-fit grid-cols-1 items-center justify-center gap-2"
    >
      <h1 className="text-center">{title}</h1>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="rounded-md bg-blue-500 text-white">
        {buttonText}
      </button>
      <p>{loading ? "Processing..." : ""}</p>
    </form>
  );
};

export default AuthForm;
