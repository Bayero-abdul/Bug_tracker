import React from "react";

import { Text } from "components";

const SignUpPageColumncreateanaccount = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
          size="txtRobotoRomanBold32"
        >
          {props?.signuptext}
        </Text>
        <div className="bg-white-A700 flex flex-row gap-2 items-center justify-center w-full">
          <Text
            className="text-base text-blue_gray-900 w-auto"
            size="txtRobotoRomanRegular16"
          >
            {props?.alreadyhaveaccounttext}
          </Text>
          <Text
            className="common-pointer text-base text-indigo-A400 w-auto"
            size="txtRobotoRomanMedium16"
            onClick={props?.onClick}
          >
            {props?.logintext}
          </Text>
        </div>
      </div>
    </>
  );
};

SignUpPageColumncreateanaccount.defaultProps = {
  signuptext: "Sign up",
  alreadyhaveaccounttext: "Already have an account?",
  logintext: "Log in",
};

export default SignUpPageColumncreateanaccount;
