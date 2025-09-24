import type { InputField } from "./input";

export interface AuthFormProps {
  title: string;
  fields: InputField[];
  formData: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
  questionText?: string;
  linkText: string;
  linkHref: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
