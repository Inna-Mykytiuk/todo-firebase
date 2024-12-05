"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={loading || pending}
      className="mx-auto mt-4 flex min-w-[150px] justify-center rounded bg-gradient px-4 py-2 font-bold text-white transition-all duration-300 ease-out hover:bg-mainColor shadow-shadow"
    >
      {loading ? "Adding..." : "Add"}
    </button>
  );
};

export default SubmitButton;
