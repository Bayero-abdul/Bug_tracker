import React from "react";

const sizeClasses = {
  txtRobotoRomanMedium24: "font-medium font-roboto",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanMedium22: "font-medium font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRomanLight14: "font-light font-roboto",
  txtRobotoRomanBold32: "font-bold font-roboto",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanMedium14: "font-medium font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
