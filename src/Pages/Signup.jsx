import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading,setLoading]=useState(false)
  const[errorMessage,setErrorMessage]=useState(null)
  const navigate=useNavigate();
  const handleChange = (e) => {
    //console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    //console.log(formData);
  };
 
  const handleSubmit = async (e) => {
   // console.log("functioncall");    //console.log("formData",formData);
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("please fill out the fields");
    }
    try {
     setLoading(true);
      setErrorMessage(null);
      const response =await fetch('http://localhost:5000/api/auth/register-user',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      //console.log(response);
      const data=await response.json();
      //console.log(data);
      if(data.success === false){
        return  setErrorMessage(data.message)
      }
      if(response.ok){
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
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
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your User Name"
                id="username"
                onChange={handleChange}
              />
            </div>
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
            <Button gradientDuoTone="cyanToBlue" type="submit" disabled={loading}>
            
             {loading ?(
              <>
             
              <Spinner color="info" aria-label="Info spinner example" size="sm" />
              <span className="pl-3">Loading...</span>
              </>
             ) :(

             "Sign Up"
             )
             }
            </Button>
            <OAuth />

          </form>
          <div className="flex gap-2 text-sm mt-6">
            <span>Already Have An Account ?</span>
            <Link to="/signin" className="text-red-800">
              Sign In
            </Link>
          </div>
          {errorMessage && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">OOPS!</span>{errorMessage}
          </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
