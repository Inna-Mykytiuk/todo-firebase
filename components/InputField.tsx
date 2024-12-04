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
  defaultValue = '',
  disabled = false,
  ariaLabel,
  onBlur,
  className = '',
  isTextArea = false,
}) => {
  return isTextArea ? (
    <textarea
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      aria-label={ariaLabel}
      onBlur={(e) => onBlur(e.target.value)}
      className={className}
    />
  ) : (
    <input
      name={name}
      type="text"
      defaultValue={defaultValue}
      disabled={disabled}
      aria-label={ariaLabel}
      onBlur={(e) => onBlur(e.target.value)}
      className={className}
    />
  );
};

export default InputField;

