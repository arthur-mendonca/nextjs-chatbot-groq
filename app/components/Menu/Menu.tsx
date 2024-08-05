import React from "react";
import Link from "next/link";

interface MenuProps {
  showJobs: boolean;
  setShowJobs: (showJobs: boolean) => void;
}

export const Menu: React.FC<MenuProps> = ({ showJobs, setShowJobs }) => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/start" className="text-white cursor-pointer">
              Início
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/chatbot" className="text-white cursor-pointer">
              Chatbot
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/jobs" className="text-white cursor-pointer">
              Jobs
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
