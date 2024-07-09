import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Raisequery = () => {
  const[queryData,setQueryData]=useState({});
  const [loading,setLoading ] = useState(false);
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate = useNavigate();
   

  const handleChange =(e)=>{
    setQueryData({...queryData,[e.target.id]: e.target});
  };
  
  const handlesubmit = async (e) => {

    e.preventDefault();
   // console.log("query");
    if(!queryData.username || !queryData.email || !queryData.query){
      return setErrorMessage("Please Fill Out The Fields");
    };
    try {
      const response = await fetch("https://crm-backend-iba-gold-shop-backend.onrender.com/api/auth/postquery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryData),
      });
      const data = await response.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
     setErrorMessage(error.message);
     setLoading(false);
  
    }
  };
  return (
    <div className="min-h-screen mb-5  dark:text-white mx-10">
      
        <form  onSubmit={handlesubmit}>
        <div className="mt-5">
          <Label value="username" />
              <TextInput
                type="username"
                placeholder="Enter your name"
                id="username"
                onChange={handleChange}
              />
              </div>
          <div className="mt-5">
          <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <Label value="query" />
              <TextInput
                type="query"
                placeholder="Enter your query"
                id="query"
                onChange={handleChange}
              />
            </div>
          <div className="flex flex-row py-6">
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
                "Submite My Query"
              )}
            </Button>
          </div>
        </form>
     
    </div>
  );
};

export default Raisequery;
