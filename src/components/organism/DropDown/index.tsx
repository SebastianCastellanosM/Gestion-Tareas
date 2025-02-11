import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';

interface DropdownProps {
  data: { id: string; value: string; label: string }[];
  onChange?: (value: string) => void; // Prop opcional para capturar cambios
}

const Dropdown: React.FC<DropdownProps> = ({ data, onChange }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>();

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div>
      <Select value={selectedValue} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecciona un rol" />
        </SelectTrigger>
        <SelectContent>
          {data.map(({ id, value, label }) => (
            <SelectItem key={id} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;