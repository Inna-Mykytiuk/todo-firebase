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
      className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-center"
    >
      <h1 className="text-center">{title}</h1>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="bg-blue-500 rounded-md text-white">
        {buttonText}
      </button>
      <p>{loading ? "Processing..." : ""}</p>
    </form>
  );
};

export default AuthForm;
