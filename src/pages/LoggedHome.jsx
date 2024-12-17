import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';

const LoggedHome = () => {
  const { user, logout } = useAuth0();
  const [activeTab, setActiveTab] = useState('CDTs');

  return (
    <div className="p-6 lg:mx-20 xl:mx-36 2xl:mx-52">
      <div className="flex items-center justify-between mb-3   ">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <h1 className="hidden lg:block text-3xl font-bold text-right mt-3">
          Bienvenido, {user.name}
        </h1>

      </div>
      <div className='mb-20'>
        <TabContent activeTab={activeTab} />

      </div>

    </div>
  );
};

export default LoggedHome;
