"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basic from "./_components/basic-component";
import { Heart, Settings, SlidersHorizontal } from "lucide-react";
import Thankyou from "./_components/thankyou-component";
import ExtraSettings from "./_components/extraSettings-component";
import { useState } from "react";

interface WorkspaceProps {
  isVisible: () => void;
}
const WorkSpace = ({ isVisible }: WorkspaceProps) => {
  const [activeTab, setActiveTab] = useState("basic");
  const handleGoBack = () => {
    setActiveTab("basic");
  };
  return (
    <div className="w-full h-full fixed inset-y-0 z-10 flex justify-center pt-10 bg-[url(/images/bg.png)] bg-cover bg-center overflow-y-auto">
      <div className="bg-white w-[80%] relative rounded-xl pt-6 px-3">
        <button
          className="absolute top-2 right-6 cursor-pointer"
          onClick={isVisible}
        >
          X
        </button>
        {/* Tabs*/}
        <Tabs
          defaultValue="basic"
          className="w-full h-full"
          value={activeTab}
          onValueChange={(e) => setActiveTab(e)}
        >
          <TabsList className="w-fit border rounded-[5px] gap-6 text-neutral-700 ">
            <TabsTrigger
              value="basic"
              className="data-[state=active]:bg-blue-800/80 data-[state=active]:text-white data-[state=active]:scale-105 data-[state=active]:rounded-l-[5px]"
            >
              <span>
                <Settings className="mr-2 h-4 w-4" />
              </span>
              Basic
            </TabsTrigger>
            <TabsTrigger
              value="thankyou"
              className="data-[state=active]:bg-blue-800/80 data-[state=active]:text-white data-[state=active]:scale-105"
            >
              <span>
                <Heart className="mr-2 h-4 w-4" />
              </span>
              Thank you page
            </TabsTrigger>
            <TabsTrigger
              value="setting"
              className="data-[state=active]:bg-blue-800/80 data-[state=active]:text-white data-[state=active]:scale-105 last:data-[state=active]:rounded-r-[5px]"
            >
              <span>
                <SlidersHorizontal className="mr-2 h-4 w-4" />
              </span>
              Extra settings
            </TabsTrigger>
            {/* <TabsTrigger
              value="notification"
              className="data-[state=active]:bg-blue-800/80 data-[state=active]:text-white data-[state=active]:scale-105 data-[state=active]:rounded-r-[5px]"
            >
              <span>
                <Bell className="mr-2 h-4 w-4" />
              </span>
              Notifications
            </TabsTrigger> */}
          </TabsList>
          <TabsContent value="basic">
            <Basic />
          </TabsContent>
          <TabsContent value="thankyou">
            <Thankyou handleGoBack={handleGoBack} />
          </TabsContent>
          <TabsContent value="setting">
            <ExtraSettings handleGoBack={handleGoBack} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkSpace;
