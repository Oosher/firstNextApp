'use client'

import { useState } from "react";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function DarkModSwitch() {

  const [dark,setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDark((prev)=>!prev);
  };

  return (
    <>
      <div >
      {dark?<DarkModeIcon/>:<LightModeIcon/>}
      <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={dark}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onChange={toggleDark}
        />
        
        
      </div>
      
    </>
  );
}