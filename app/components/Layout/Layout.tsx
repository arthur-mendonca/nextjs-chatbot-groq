"use client";
import React, { cloneElement, useState } from "react";
import { Menu } from "../Menu/Menu";

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<{ children: React.ReactNode }> = (
  props: LayoutProps
) => {
  const [showJobs, setShowJobs] = useState(false);

  return (
    <div className={`flex ${props.className}`}>
      <Menu showJobs={showJobs} setShowJobs={setShowJobs} />
      <div className="w-full max-w-[1024px] mx-auto">
        <main className={`flex-1 p-6`}>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
