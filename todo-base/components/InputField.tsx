type InputProps = {
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  ariaLabel: string;
  onBlur: (value: string) => void;
  className?: string;
};

const InputField: React.FC<InputProps> = ({
  name,
  defaultValue = '',
  disabled = false,
  ariaLabel,
  onBlur,
  className = '',
}) => {
  return (
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
