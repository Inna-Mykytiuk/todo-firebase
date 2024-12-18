import React, { useState } from "react";

type InputProps = {
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  ariaLabel: string;
  onBlur: (value: string) => void;
  className?: string;
  isTextArea?: boolean;
};

const InputField: React.FC<InputProps> = ({
  name,
  defaultValue = "",
  disabled = false,
  ariaLabel,
  onBlur,
  className = "",
  isTextArea = false,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (!value.trim()) {
      if (name === "description" || name === "title") {
        setError("This field must be filled in.");
      }
    } else {
      setError(null);
      onBlur(value);
    }
  };

  return (
    <div className="relative">
      {isTextArea ? (
        <textarea
          name={name}
          defaultValue={defaultValue}
          disabled={disabled}
          aria-label={ariaLabel}
          onBlur={(e) => handleBlur(e.target.value)}
          className={`${className} ${error ? "border border-red-500" : ""}`}
        />
      ) : (
        <input
          name={name}
          type="text"
          defaultValue={defaultValue}
          disabled={disabled}
          aria-label={ariaLabel}
          onBlur={(e) => handleBlur(e.target.value)}
          className={`${className} ${error ? "border border-red-500" : ""}`}
        />
      )}
      {error && (
        <p
          className={`absolute ml-3 text-sm text-red-500 ${isTextArea ? "top-[48px]" : "top-[26px]"}`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
