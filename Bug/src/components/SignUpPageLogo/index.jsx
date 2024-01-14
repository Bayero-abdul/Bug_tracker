import React from "react";

import { Img, Text } from "components";

const SignUpPageLogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col md:h-auto h-max inset-[0] items-center justify-end m-auto w-auto md:w-full">
          <Text
            className="ml-9 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
            size="txtRobotoRomanMedium24"
          >
            {props?.text}
          </Text>
        </div>
        <Img
          className="absolute h-10 inset-y-[0] left-[0] my-auto w-10"
          src="images/img_bug_indigo_a400.svg"
          alt="bug"
        />
      </div>
    </>
  );
};

SignUpPageLogo.defaultProps = { text: "Bug Tracker" };

export default SignUpPageLogo;
