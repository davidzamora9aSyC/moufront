import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';

const LoggedHome = () => {
  const { user, logout } = useAuth0();
  const [activeTab, setActiveTab] = useState('CDTs');
    
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-3 mx-36">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <h1 className="text-3xl font-bold text-right mt-3">Bienvenido, {user.name}</h1>
      </div>
      <div className='mx-36 mb-20'> 
         <TabContent activeTab={activeTab} />

      </div>
     
    </div>
  );
};

export default LoggedHome;
