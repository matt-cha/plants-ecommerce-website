interface FieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Field: React.FC<FieldProps> = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col my-4 ">
      <label className="pl-1 text-slate-500" htmlFor={label}>
        {label}
      </label>
      <input
        className="w-64 bg-slate-50 border px-2 py-1 mt-2 focus:outline-emerald-600 border-slate-300 rounded-lg"
        id={label}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Field;
