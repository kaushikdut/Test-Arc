import React from "react";
import { Card } from "./ui/card";
import { BellRing, CreditCard, Plus, Search, Video } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
// type Props = {};

const DashboardPage = () => {
  return (
    <div className="p-5 flex justify-center bg-transparent  ">
      <div className=" w-[100vw] md:w-[70vw]">
        <h1 className="font-semibold text-xl">Overview</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 mt-10">
          <Card className="rounded">
            <div className=" flex items-center space-x-4 rounded-md pt-8  p-4">
              <Video />
              <div className="space-y-1">
                <p className="text-sm font-semibold leading-none">Videos</p>
                <p className="text-sm text-muted-foreground">2</p>
              </div>
            </div>
          </Card>
          <Card className="rounded">
            <div className=" flex items-center space-x-4 rounded-md pt-8  p-4">
              <CreditCard />
              <div className="space-y-1">
                <p className="text-sm font-semibold leading-none">
                  Video Credits
                </p>
                <p className="text-sm text-muted-foreground">0</p>
              </div>
            </div>
          </Card>
          <Card className="rounded">
            <div className=" flex items-center space-x-4 rounded-md pt-8  p-4">
              <BellRing />
              <div className="space-y-1">
                <p className="text-sm font-semibold leading-none">Plan</p>
                <p className="text-sm text-muted-foreground">Basic Plan</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-14">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">Spaces</h1>

            <Button variant={"outline"} className="rounded">
              <Plus className="mr-2" size={15} /> Add Space
            </Button>
          </div>
          <div className="my-5 grid md:grid-cols-3 xs:grid-cols-1">
            <div className="relative">
              <Input
                placeholder="Search testimonials by name"
                className="rounded border border-slate-400"
              />
              <Button
                className="absolute right-0 top-0 rounded-r border border-slate-400 hover:bg-blue-100"
                variant={"outline"}
              >
                <Search className="text-slate-700" />
              </Button>
            </div>
          </div>

          <div className="grid xs:grid-cols-1 md:grid-cols-3  gap-2 ">
            <Card className="rounded">
              <div className=" flex items-center space-x-4 rounded-md pt-8  p-4">
                <Video />
                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-none">Videos</p>
                  <p className="text-sm text-muted-foreground">2</p>
                </div>
              </div>
            </Card>
            <Card className="rounded">
              <div className=" flex items-center space-x-4 rounded-md pt-8  p-4">
                <Video />
                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-none">Videos</p>
                  <p className="text-sm text-muted-foreground">2</p>
                </div>
              </div>
            </Card>
            <Card className="rounded">
              <div className=" flex items-center space-x-4 rounded-md pt-8  p-4">
                <Video />
                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-none">Videos</p>
                  <p className="text-sm text-muted-foreground">2</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
