

function InputField() {
  return (
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input
        type="email"
        className="form-control w-25 p-2"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
  );
}

export default InputField;
