import { NavLink } from "react-router-dom";

type NavButtonProps = {
  text: string;
  icon: React.ReactNode;
  to: string;
};

const NavButton = ({ text, icon, to }: NavButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        `nav-link d-flex align-items-center justify-content-center py-3 rounded-2 my-3 ${
          isPending ? "pending" : isActive ? "active" : ""
        }`
      }
    >
      <div className="me-2">{icon}</div>
      <div>{text}</div>
    </NavLink>
  );
};

export default NavButton;
