import React from "react";
import Link from "next/link";
import { IconPlayerPlay } from "@tabler/icons-react";
import { IconMessage } from "@tabler/icons-react";
import { IconFileDescription } from "@tabler/icons-react";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <aside
      className={`fixed bottom-0 right-0 left-0 flex items-center 
      justify-between w-full bg-gray-800 text-white 
      sm:static sm:h-screen sm:flex-col sm:w-60 sm:items-start sm:pl-4`}>
      <nav className="mt-5 w-full">
        <ul className="flex sm:flex-col">
          <li className="mb-4 flex gap-2 hover:bg-zinc-500 mr-4 p-2 rounded-md ">
            <IconPlayerPlay />
            <Link href="/start" className="text-white cursor-pointer">
              Início
            </Link>
          </li>
          <li className="mb-4 flex gap-2 hover:bg-zinc-500 mr-4 p-2 rounded-md ">
            <IconMessage />
            <Link href="/chatbot" className="text-white cursor-pointer">
              Chatbot
            </Link>
          </li>
          <li className="mb-4 flex gap-2 hover:bg-zinc-500 mr-4 p-2 rounded-md">
            <IconFileDescription />
            <Link href="/jobs" className="text-white cursor-pointer">
              Jobs
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sm:mb-4">
        <Link
          href="https://www.arthurmendonca.com"
          target="_blank"
          rel="noopener noreferrer">
          <span>
            <small>
              Site criado por <span className="font-bold">Arthur Mendonça</span>
            </small>
          </span>
        </Link>
      </div>
    </aside>
  );
};
