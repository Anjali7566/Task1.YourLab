"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
 
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.documentElement.setAttribute("data-theme", e.target.value);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }; 
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-2">
        <button onClick={toggleTheme} className="btn bg-blue-500 text-white py-2 px-4 rounded">Change Theme</button>
        <select onChange={handleThemeChange}
          value={theme} className="btn bg-gray-200 text-black py-2 px-4 rounded">
          <option value="light">Default</option>
          <option value="dark">Dark</option>
          <option value="cupcake">Cupcake</option>
          <option value="bumblebee">Bumblebee</option>
          <option value="synthwave">Synthwave</option>
          <option value="halloween">Halloween</option>
          <option value="fantasy">Fantasy</option>
          <option value="dracula">Dracula</option>
          <option value="aqua">Aqua</option>
          <option value="luxury">Luxury</option>
          <option value="night">Night</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-1 md:p-20">
        <div className="mb-4 mt-20 md:mb-0 md:mr-10 rounded-full overflow-hidden w-79 h-79 md:mt-10">
          <Image src="/asset/img1.jpeg" alt="Anjali Kushwaha" width={300} height={300} className="rounded-full" />
        </div>
        <div className="text-center w-50 max-w-[300px] mt-3 md:mt-20 ">
          <h1 className="text-2xl font-bold">Hey, Anjali Kushwaha</h1>
          <p className="mt-4 text-1xl pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odio illum rerum eius quos impedit omnis ullam explicabo ut perspiciatis? Excepturi itaque sint nobis expedita suscipit illum voluptatum eligendi consequuntur!
          </p>
        </div>
      </div>
    </div>
  );
}
