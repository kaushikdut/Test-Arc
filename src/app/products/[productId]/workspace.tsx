import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basic from "./_components/basic-component";

interface WorkspaceProps {
  isVisible: () => void;
}
const WorkSpace = ({ isVisible }: WorkspaceProps) => {
  return (
    <div className="w-full h-full fixed inset-y-0 z-10 flex justify-center pt-10 bg-[url(/images/bg.png)] bg-cover bg-center overflow-y-auto">
      <div className="bg-white w-[80%] relative rounded-xl">
        <button
          className="absolute top-2 right-6 cursor-pointer"
          onClick={isVisible}
        >
          X
        </button>
        <Tabs defaultValue="basic" className=" w-full h-full">
          <TabsList>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="thankyou">Thank you page</TabsTrigger>
            <TabsTrigger value="setting">Extra settings</TabsTrigger>
            <TabsTrigger value="notification">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="w-full h-full">
            <Basic />
          </TabsContent>
          <TabsContent value="thankyou" className="w-full h-full">
            <div className="w-full h-full mt-5 flex-col flex md:flex-row gap-4 px-3">
              <div className="w-full md:w-[40%]">thankyou</div>
              <div className=" flex-grow">thankyou</div>
            </div>
          </TabsContent>{" "}
          <TabsContent value="setting" className="w-full h-full">
            <div className="w-full h-full mt-5 flex-col flex md:flex-row gap-4 px-3">
              <div className="w-full md:w-[40%]">setting</div>
              <div className=" flex-grow">setting</div>
            </div>
          </TabsContent>{" "}
          <TabsContent value="notification" className="w-full h-full">
            <div className="w-full h-full mt-5 flex-col flex md:flex-row gap-4 px-3">
              <div className="w-full md:w-[40%]">notification</div>
              <div className=" flex-grow">notification</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkSpace;
