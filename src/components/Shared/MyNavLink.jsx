import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-2 bg-green-800 text-white px-4 py-1.5 rounded-md"
          : "flex items-center gap-2 text-gray-600 px-4 py-1.5 rounded-md hover:bg-gray-200 hover:text-gray-800"
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
