type CheckboxProps = {
  checked: boolean;
  ariaLabel: string;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  ariaLabel,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      aria-label={ariaLabel}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-1 flex h-[22px] w-[22px] cursor-pointer items-center justify-center"
    />
  );
};

export default Checkbox;
