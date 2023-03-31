import React from "react";
import { NavLink } from "react-router-dom";

const List = ({ className, navigation, listContent, href }) => {
  return (
    <li className={className}>
      {navigation ? (
        <NavLink
          className="transition-all duration-100 ease-linear hover:text-[#333]"
          to={href}
        >
          {listContent}
        </NavLink>
      ) : (
        listContent
      )}
    </li>
  );
};

export default List;
