import React from "react";

const Lists = ({ className, children }) => {
  return <ul className={className}> {children} </ul>;
};

export default Lists;
