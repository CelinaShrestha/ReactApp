type InputFieldProps = {
  label: string;
  placeholder: string;
  type: string;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  required?: boolean;
  error?: boolean;
};

const InputField = (props: InputFieldProps) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        className="form-control w-100 p-2"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        autoComplete="off"
      />
      {props.error && <p className="error">{props.errorMessage}</p>}
    </div>
  );
};

export default InputField;
