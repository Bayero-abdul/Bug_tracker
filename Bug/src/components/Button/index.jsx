import React, { useState } from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]", square: "rounded-none" };
const variants = {
  fill: {
    indigo_A400: "bg-indigo-A400 text-white-A700",
    white_A700: "bg-white-A700 text-blue_gray-900",
  },
};
const sizes = { xs: "pl-2.5 pr-[8px] py-[8px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  onClick,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      onClick={onClick}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_A400", "white_A700"]),
  onClick: PropTypes.func,
};

export { Button };
