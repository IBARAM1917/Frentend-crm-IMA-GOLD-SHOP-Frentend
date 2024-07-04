import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../Components/DashboardSidebar';
import Dashboarddesigns from '../Components/Dhboarddesigns';
import { useLocation } from 'react-router-dom';
import Raisequery from '../Components/Raisequery';
import Frequentlyaked from '../Components/Frequentlyaked';

const Dashboard = () => {
    const location = useLocation();
    const [tab,setTab]= useState('')
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const tabUrl = urlParams.get('tab'); //tab = profile
        if(tabUrl){
            setTab(tabUrl)  //profile
        }
    },[location.search])
    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div className='md:w-58'>
                <DashboardSidebar  />
            </div>
             {tab === "designs"  && <Dashboarddesigns  />}
             {tab === "query" && <Raisequery />}
              { tab === "faq" && <Frequentlyaked /> }
        </div>
    );
};

export default Dashboard;