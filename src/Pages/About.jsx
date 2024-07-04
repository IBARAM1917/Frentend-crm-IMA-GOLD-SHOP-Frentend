import React from "react";
import { useUserContext } from "../Components/context/usercontex";


function Home() {
  const { name, setName, email, setEmail, phone, setPhone,feedback,setFeedback, handleFormSubmit } =
   useUserContext ();
  const formId = 11;
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          <img
            src="https://blogimage.vantagecircle.com/content/images/2022/11/Employee-feedback.png"
            className="img-thumbnail "
            alt="Contact Us Illustration"
          />
        </div>
        <div className="col-md-10 mx-auto col-lg-5 ">
          <h2 className="display-4 fw-bold lh-1 text-white mb-4">
           <span className="text-primary">Feedback</span>
          </h2>
          <form
            className="p-4 p-md-5 border rounded bg-light"
            onSubmit={(e) =>
              handleFormSubmit(e, { name, email, phone,feedback }, formId)
            }
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control "
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
             
              <input
                type="text"
                className="form-control"
                id="floatingNumber"
                placeholder="Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
             
            </div>
        
            <button className="btn btn-primary w-100 " type="submit">
              Submit My Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;