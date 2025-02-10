import { useRef, useState } from 'react';

interface FormDataObject {
  [key: string]: string | { [key: string]: string };
}

const useFormData = <T extends FormDataObject>(initial: T) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState<T>(initial);

  const getFormData = (): T => {
    const fd = new FormData(form.current!);
    const obj: FormDataObject = {};

    fd.forEach((value, key) => {
      const str = key.split(':');
      if (str.length > 1) {
        obj[str[0]] = {
          ...obj[str[0]],
          [str[1]]: value,
        };
      } else {
        obj[str[0]] = value;
      }
    });

    return obj as T;
  };

  const updateFormData = () => {
    setFormData(getFormData());
  };

  return { form, formData, updateFormData };
};

export default useFormData;