import React from "react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const MainContent = () => {
  const [activeMenu, setActiveMenu] = React.useState("Inbox");

  const menus = [
    { name: "Inbox" },
    { name: "Sent" },
    { name: "Drafts" },
    { name: "Trash" },
  ];

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white h-screen p-4">
        <h2 className="text-md font-semibold mb-4 text-center text-slate-500">
          INBOX
        </h2>
        <ul>
          {menus.map((menu) => (
            <li key={menu.name}>
              <Button
                className={`w-full text-left px-4 py-2 mb-2 ${
                  activeMenu === menu.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleMenuClick(menu.name)}
              >
                {menu.name}
              </Button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Body */}
      <main className="flex-1 flex justify-center items-center">
        <Image
          width={200}
          height={400}
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="rounded-md"
        />
      </main>
    </div>
  );
};

export default MainContent;
