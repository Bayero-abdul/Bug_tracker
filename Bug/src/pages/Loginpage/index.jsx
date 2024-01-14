import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { authLogin } from "service/api";
import { Button, Img, Input, Text } from "components";
import SignUpPageColumncreateanaccount from "components/SignUpPageColumncreateanaccount";
import SignUpPageColumnfield from "components/SignUpPageColumnfield";

const LoginpagePage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

   // Update the function to handle form submission with validation
   const login = () => {
    // Validate form data
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    // Set errors and return if there are validation errors
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // If validation passes, proceed with registration
    const req = {
      data: {
        email: formData.email,
        password: formData.password,
      },
    };

    authLogin(req)
      .then((res) => {
        // Handle successful registration
        console.log("Login successful:", res.data);
        navigate("/projectspage"); // Redirect to the home page
      })
      .catch((err) => {
        // Check if the error is due to an existing user (status code 400)
        if (err.response && err.response.status === 401) {
          setErrors({
            ...newErrors,
            email: "Invalid User",
          });
          
          console.error("Invalid User");
        }
        // Handle registration error
        console.error("Login error:", err);
      });
      setErrors({});
  };

  // Update the state when input values change
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the corresponding error when the input changes
    setErrors({
      ...errors,
      [name]: "",
    });
  };



  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[18px] items-center justify-start mx-auto p-16 md:px-10 sm:px-5 w-full">
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[177px]"
          leftIcon={
            <Img
              className="h-10 mr-2"
              src="images/img_bug_indigo_a400.svg"
              alt="Bug"
            />
          }
          shape="square"
          color="white_A700"
          variant="fill"
        >
          <div className="!text-black-900 font-medium md:text-[22px] sm:text-xl text-2xl text-left">
            Bug Tracker
          </div>
        </Button>
        <SignUpPageColumncreateanaccount
          className="bg-white-A700 flex flex-col gap-2 items-center justify-start md:px-5 w-auto"
          signuptext="Log in to your account"
          alreadyhaveaccounttext="Don’t have an account?"
          logintext="Sign up"
        />
        <SignUpPageColumnfield
          className="bg-white-A700 flex flex-col gap-[18px] h-[325px] md:h-auto items-center justify-start mb-[120px] p-6 md:px-5 w-[560px] sm:w-full"
          fieldOne="Email"
          fieldTwo="Password"
          createAccount="Log In"
          onClick={() => login()}
          inputData={formData}
          onInputChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default LoginpagePage;
