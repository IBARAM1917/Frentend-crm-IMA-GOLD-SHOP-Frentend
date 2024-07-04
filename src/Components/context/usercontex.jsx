// context/usercontext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
  data: [],
  name: "",
  email: "",
  phone: "",
  feedback:"",
  setData: () => {},
  setName: () => {},
  setEmail: () => {},
  setPhone: () => {},
  setfeedback:()=>{},
  AddtoTable: () => {},
  handleFormSubmit: () => {},
  handleUpdate: () => {},
  handleDelete: () => {},
});

const API = "https://jsonplaceholder.typicode.com/users";

export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const[feedback,setFeedback]=useState("");
  const AddtoTable = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };
  let navigate = useNavigate();

  const handleFormSubmit = (e, userData) => {
    e.preventDefault();
    axios
      .post(API, userData) // <-- The same 'API' URL is used for all form submissions
      .then((response) => {
        console.log(response);
        AddtoTable(response.data);
        navigate("/submitfeedback");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setName("");
    setEmail("");
    setPhone("");
    setFeedback("");
  };

  const handleUpdate = (id, updatedData) => {
    axios
      .put(`${API}/${id}`, updatedData)
      .then((response) => {
        const updatedUser = response.data;
        setData((prevData) =>
          prevData.map((user) => (user.id === id ? updatedUser : user))
        );
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const value = {
    data,
    name,
    email,
    phone,
    feedback,
    setName,
    setData,
    AddtoTable,
    handleFormSubmit,
    setEmail,
    setPhone,
    setFeedback,
    handleUpdate,
    handleDelete,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}