import React from "react";
import Header from './header/header';
import ProjectOverview from './project-overview';

export default function Home() {
 
  return (
    <div className="bg-black h-screen text-white p-10">
      <Header/>
      <ProjectOverview/>

    </div>
  );
}
