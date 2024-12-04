"use client"

import React from 'react'
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={loading || pending}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {loading ? "Adding..." : "Add"}
    </button>
  )
}

export default SubmitButton
