type ButtonProps = {
  text: string;
  class?: string;
};

function Button(props: ButtonProps) {
  return <button type="button" className="btn primary-button w-25">{props.text}</button>;
}

export default Button;
