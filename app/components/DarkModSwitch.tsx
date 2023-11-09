'use client'

import { useState } from "react";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Switch from '@mui/material/Switch';

export default function DarkModSwitch() {

  const [dark,setDark] = useState(false);

  const toggleDark = async () => {
    
    setDark((prev)=>!prev);
    await document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <div >
      {dark?<DarkModeIcon className=" text-yellow-200"/>:<LightModeIcon className=" text-white"/>}
      <Switch
      
          checked={dark}
          onChange={toggleDark}
        />
        
        
      </div>
      
    </>
  );
}