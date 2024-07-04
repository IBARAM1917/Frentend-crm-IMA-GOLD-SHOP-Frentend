import React, { useEffect, useState } from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight,HiDocumentText,HiUser} from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { signOutSuccess } from '../Redux/Slice/userSlice';

const DashboardSidebar = () => {
  const { currentuser } =useSelector((state) => state.user);
  const location =useLocation();
  const dispatch =useDispatch();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabUrl = urlParams.get("tab"); //tab = profile
    if (tabUrl) {
      setTab(tabUrl); //profile
    }
  }, [location.search]);
  const handleSignout = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
  };
  
  return (
    <Sidebar className="w-full md:w-58">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-2">
       
            <>
              <Link  to="/dashboard?tab=designs">
            <Sidebar.Item
              active={tab === "designs"}
              labelColor="dark"
              as="div"
            >
              New Designs
            </Sidebar.Item>
          </Link>
            <Link to="/dashboard?tab=faq" >
                <Sidebar.Item
              active={tab === "faq"}
              labelColor="dark"
              as="div"
            >
              FAQ
            </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=query" >
                <Sidebar.Item
              active={tab === "query"}
              labelColor="dark"
              as="div"
            >
             Raise Query
            </Sidebar.Item>
            </Link>
          
            </>
         
        
          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashboardSidebar;