import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../Redux/Slice/userSlice";
import OAuth from "../Components/OAuth";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    //console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    //console.log(formData);
  };

  const handleSubmit = async (e) => {
    // console.log("functioncall");    //console.log("formData",formData);
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("please fill out the fields"));
    }
    try {
      dispatch(signInStart());
      const response = await fetch(
        "http://localhost:5000/api/auth/login-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      //console.log(response);
      const data = await response.json();
      //console.log(data);
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      if (response.ok) {
        dispatch(signInSuccess(data));
        navigate("/card");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      //console.log(error);
    }
  };
  return (
    <div className="container my-5">
    <div className="row align-items-center">
      <div className="col-lg-7 text-center text-lg-start">
        <img
          src="https://img.freepik.com/free-vector/jewellery-store-with-seller-customer_33099-1719.jpg"
          className="img-thumbnail "
          alt="Contact Us Illustration"
        />
      </div>
  
       <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter your Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="cyanToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    color="info"
                    aria-label="Info spinner example"
                    size="sm"
                  />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-6">
            <span>Don't Have An Account ?</span>
            <Link to="/signup" className="text-red-800">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert color="failure" icon={HiInformationCircle} className="mt-5">
              <span className="font-medium me-2">🥴OOPS!</span>
              {errorMessage}
            </Alert>
          )}
        </div> 
      </div>
    </div>
  );
};

export default Signin;
