import classNames from "classnames";

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

function Button({ text, className, icon, onClick }: ButtonProps) {
  const buttonClasses = classNames(
    "btn",
    className,
    "w-100",
    "align-items-center",
    "d-flex",
    "justify-content-center"
  );

  return (
    <button type="submit" className={buttonClasses} onClick={onClick}>
      {icon && <span className="icon px-2">{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
