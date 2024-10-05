import React from "react";
// import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { Circle } from "lucide-react";

const MainContent = () => {
  const [activeMenu, setActiveMenu] = React.useState("Inbox");

  const menus = [
    { name: "All", color: "text-red-600" },
    { name: "Texts", color: "text-green-600" },
    { name: "Videos", color: "text-violet-600" },
    { name: "Favorites", color: "text-orange-600" },
  ];

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white h-screen p-4">
        <h2 className="text-md font-semibold mb-4  text-slate-500">INBOX</h2>
        <ul>
          {menus.map((menu) => (
            <li key={menu.name}>
              <div
                className={`w-full flex items-center text-left text-sm px-4 py-2 mb-2 rounded ${
                  activeMenu === menu.name
                    ? "bg-blue-200 text-black"
                    : "bg-white text-black"
                }`}
                onClick={() => handleMenuClick(menu.name)}
              >
                <Circle size={10} className={`mr-3 ${menu.color}`} />{" "}
                {menu.name}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Body */}
      <main className="flex-1 flex justify-center items-center">
        <Image
          width={600}
          height={700}
          src={"/creative_dream.svg"}
          alt="Placeholder"
          className="rounded-md"
        />
      </main>
    </div>
  );
};

export default MainContent;
