import NavButton from "../NavButton";
import {
  MdOutlineDashboard,
  MdOutlinePeople,
  MdOutlineShoppingCart,
  MdOutlineReceipt,
} from "react-icons/md";

const NavLinks = [
  {
    text: "Dashboard",
    icon: <MdOutlineDashboard size="20px" />,
    to: "/", // Update these routes according to your app
  },
  {
    text: "Users",
    icon: <MdOutlinePeople size="20px" />,
    to: "/users",
  },
  {
    text: "Products",
    icon: <MdOutlineShoppingCart size="20px" />,
    to: "/products",
  },
  {
    text: "Orders",
    icon: <MdOutlineReceipt size="20px" />,
    to: "/orders",
  },
];

const NavBar = () => {
  return (
    <div className="nav-bar m-3 px-3 ">
      {NavLinks.map((link, index) => (
        <NavButton
          key={index}
          icon={link.icon}
          text={link.text}
          to={link.to} // Pass the route to NavButton
        />
      ))}
    </div>
  );
};

export default NavBar;
