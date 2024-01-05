// Import necessary components and hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRegister } from "service/api";
import { Button, Input, Text } from "components";
import SignUpPageColumnfield from "components/SignUpPageColumnfield";
import SignUpPageColumncreateanaccount from "../../components/SignUpPageColumncreateanaccount";
import SignUpPageLogo from "components/SignUpPageLogo";
import { ErrorMessage } from "components/ErrorMessage";

const SignuppagePage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // Update the function to handle form submission with validation
  const createAccount = () => {
    // Validate form data
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Set errors and return if there are validation errors
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // If validation passes, proceed with registration
    const req = {
      data: {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
      },
    };

    authRegister(req)
      .then((res) => {
        // Handle successful registration
        console.log("Registration successful:", res.data);
        navigate("/"); // Redirect to the home page
      })
      .catch((err) => {
        // Check if the error is due to an existing user (status code 400)
        if (err.response && err.response.status === 400) {
          setErrors({
            ...newErrors,
            email: "User with this email already exists",
          });
          
          console.error("User with this email already exists");
        }
        // Handle registration error
        console.error("Registration error:", err);
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
      <div className="bg-white-A700 flex flex-col font-roboto gap-[17px] items-center justify-start mx-auto p-[47px] md:px-10 sm:px-5 w-full">
        <SignUpPageLogo className="flex h-10 relative w-[177px]" />
        <SignUpPageColumncreateanaccount className="bg-white-A700 flex flex-col gap-2 items-center justify-start md:px-5 w-auto" />
        
        {/* Display validation errors */}
        {Object.entries(errors).some(([fieldName, error]) => !!error) && (
          <div className="flex justify-center">
            {Object.entries(errors).map(([fieldName, error], index) => (
              <ErrorMessage key={index} errors={[error]} className="" />
            ))}
          </div>
        )}

        {/* Form */}
        <SignUpPageColumnfield
          className="bg-white-A700 flex flex-col gap-[18px] h-[457px] md:h-auto items-center justify-start mb-[22px] p-6 md:px-5 w-[556px] sm:w-full"
          field="Full Name"
          fieldOne="Email"
          fieldTwo="Password"
          fieldThree="Confirm Password"
          onClick={() => createAccount()}
          // Pass input values and handleInputChange function to SignUpPageColumnfield
          inputData={formData}
          onInputChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SignuppagePage;
