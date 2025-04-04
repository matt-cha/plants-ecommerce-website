import { useState } from "react";
import Field from "./Field";

type FieldType = {
  label: string;
  type: string;
};

type AuthFormProps = {
  fields: FieldType[];
  submitButtonLabel: string;
};

const AuthForm = ({ fields, submitButtonLabel }: AuthFormProps) => {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initialState: Record<string, string> = {};
    for (const field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form className="p-4 m-4 bg-white border rounded-lg font-lato border-slate-200">
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="w-full py-2 mt-4 text-white rounded-lg bg-emerald-700">
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
