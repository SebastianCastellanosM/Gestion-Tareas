import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={`text-sm font-medium text-gray-800 ${className}`} {...props}>
      {children}
    </label>
  );
};