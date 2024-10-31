import React from 'react';
import Button from './Button';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 mt-5 ">
      <Button
        text="Mis CDTs"
        onClick={() => setActiveTab('CDTs')}
        color={activeTab === 'CDTs' ? 'bg-[#c954a5]' : 'bg-transparent'}
        textColor={activeTab === 'CDTs' ? 'text-white' : 'text-black'}
        border={activeTab === 'CDTs' ? 'border-transparent' : 'border-black'}
        disableHover={true}
      />
      <Button
        text="Cuentas de inversión"
        onClick={() => setActiveTab('Inversion')}
        color={activeTab === 'Inversion' ? 'bg-[#c954a5]' : 'bg-transparent'}
        textColor={activeTab === 'Inversion' ? 'text-white' : 'text-black'}
        border={activeTab === 'Inversion' ? 'border-transparent' : 'border-black'}
        disableHover={true}
      />
      <Button
        text="Cuenta de pensión"
        onClick={() => setActiveTab('Pension')}
        color={activeTab === 'Pension' ? 'bg-[#c954a5]' : 'bg-transparent'}
        textColor={activeTab === 'Pension' ? 'text-white' : 'text-black'}
        border={activeTab === 'Pension' ? 'border-transparent' : 'border-black'}
        disableHover={true}
      />
    </div>
  );
};

export default Tabs;
