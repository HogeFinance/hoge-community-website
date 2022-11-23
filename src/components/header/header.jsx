import React from "react";
import Menu from './menu';

export default function Header() {
  return (
    <div className="flex flex-row w-full items-center">
      <img className="w-1/8 float-right" 
        src={"hoge.png"} alt='Hoge'/>
      <Menu/>
    </div>
  );
}
