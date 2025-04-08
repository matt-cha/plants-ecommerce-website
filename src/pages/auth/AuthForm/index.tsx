import { useState } from "react";
import Field from "./Field";

type FieldType = {
  label: string;
  type: string;
};

type AuthFormProps = {
  fields: FieldType[];
  submitButtonLabel: string;
  onSubmit: (values: Record<string, string>) => Promise<void>;
};

const AuthForm = ({ fields, submitButtonLabel, onSubmit }: AuthFormProps) => {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initialState: Record<string, string> = {};
    for (const field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
      className="p-4 m-4 bg-white border rounded-lg font-lato border-slate-200"
    >
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

      <button
        type="submit"
        className="w-full py-2 mt-4 relative text-white rounded-lg bg-emerald-700"
      >
        {submitButtonLabel}
        {loading && (
          <div className="absolute top-0 right-4 flex items-center h-full">
            <i className="fa-spinner-third fa-solid text-green-300 text-xl animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
