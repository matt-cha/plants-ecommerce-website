import { useState } from "react";
import Field from "./Field";

interface FieldConfig {
  label: string;
  type: string;
}

interface AuthFormProps {
  fields: FieldConfig[];
  submitButtonLabel: string;
}
const AuthForm: React.FC<AuthFormProps> = ({ fields, submitButtonLabel }) => {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initialState: Record<string, string> = {};
    fields.forEach((field) => (initialState[field.label] = ""));
    return initialState;
  });
  return (
    <form className="p-4 font-lato bg-white border border-slate-300 rounded-lg m-4 ">
      {fields.map((field) => (
        <Field
          value={values[field.label]}
          key={field.label}
          label={field.label}
          type={field.type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValues({ ...values, [field.label]: e.target.value })
          }
        />
      ))}
      <button className="bg-emerald-700 w-full rounded-lg py-2 mt-4 text-white">
        {submitButtonLabel}
      </button>
    </form>
  );
};
export default AuthForm;
