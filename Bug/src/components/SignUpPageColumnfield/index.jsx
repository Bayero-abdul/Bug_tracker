import React from "react";
import { Button, Input, Text } from "components";

const SignUpPageColumnfield = (props) => {
  const { field, fieldOne, fieldTwo, fieldThree, inputData, onInputChange, onClick, createAccount } = props;

  return (
    <div className={props.className}>
      {field && (
        <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start w-full">
          <Text className="text-base text-blue_gray-900 w-auto" size="txtRobotoMedium16">
            {field}
          </Text>
          <Input
            name="rectangleThirtyOne_Two"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-9 outline outline-[1px] outline-gray-400 pl-3 w-full"
            shape="round"
            color="white_A700"
            variant="fill"
            onChange={(e) => onInputChange("fullname", e)}
            value={inputData.fullname}
          />
        </div>
      )}

      {fieldOne && (
        <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start w-full">
          <Text className="text-base text-blue_gray-900 w-auto" size="txtRobotoMedium16">
            {fieldOne}
          </Text>
          <Input
            name="rectangleThirtyOne_One"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-9 outline outline-[1px] outline-gray-400 pl-3 w-full"
            shape="round"
            color="white_A700"
            variant="fill"
            onChange={(e) => onInputChange("email", e)}
            value={inputData.email}
          />
        </div>
      )}

      {fieldTwo && (
        <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start w-full">
          <Text className="text-base text-blue_gray-900 w-auto" size="txtRobotoMedium16">
            {fieldTwo}
          </Text>
          <Input
            name="rectangleThirtyOne_Two"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-9 outline outline-[1px] outline-gray-400 pl-3 w-full"
            shape="round"
            color="white_A700"
            variant="fill"
            type="password" // assuming it's a password field
            onChange={(e) => onInputChange("password", e)}
            value={inputData.password}
          />
        </div>
      )}

      {fieldThree && (
        <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start w-full">
          <Text className="text-base text-blue_gray-900 w-auto" size="txtRobotoMedium16">
            {fieldThree}
          </Text>
          <Input
            name="rectangleThirtyOne_Two"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-9 outline outline-[1px] outline-gray-400 pl-3 w-full"
            shape="round"
            color="white_A700"
            variant="fill"
            type="password" // assuming it's a password field
            onChange={(e) => onInputChange("confirmPassword", e)}
            value={inputData.confirmPassword}
          />
        </div>
      )}

      <Button
        className="common-pointer cursor-pointer font-inter font-semibold leading-[normal] text-center text-lg tracking-[0.50px] w-full"
        onClick={onClick}
        shape="round"
        color="indigo_A400"
        size="xs"
        variant="fill"
      >
        {createAccount}
      </Button>
    </div>
  );
};

SignUpPageColumnfield.defaultProps = {
  fieldOne: "Email",
  fieldTwo: "Password",
  createAccount: "Create account",
};

export default SignUpPageColumnfield;
