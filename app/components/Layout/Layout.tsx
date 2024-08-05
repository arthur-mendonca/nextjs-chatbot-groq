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
  return (
    <div
      className={`flex flex-col-reverse sm:flex-row sm:flex ${props.className}`}>
      <div className="">
        <Menu />
      </div>
      <div className="max-w-[1024px] mx-auto ">
        <main className={`flex-1 p-6`}>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
