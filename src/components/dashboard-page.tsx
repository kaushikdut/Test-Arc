import React from "react";
import {
  Card,
  //   CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BellRing, CreditCard, Video } from "lucide-react";

// type Props = {};

const DashboardPage = () => {
  return (
    <div className="p-5 flex justify-center bg-transparent">
      <div className="">
        <h1 className="font-semibold text-xl">Overview</h1>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <Card>
            <div className=" flex items-center space-x-4 rounded-md pt-8  p-4">
              <Video />
              <div className="space-y-1">
                <p className="text-sm font-semibold leading-none">Videos</p>
                <p className="text-sm text-muted-foreground">2</p>
              </div>
            </div>
          </Card>
          <Card>
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
          <Card>
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
          <h1 className="font-semibold text-xl">Spaces</h1>
          <div className="grid grid-cols-4 gap-4 mt-10">
            <Card>
              <CardHeader>
                <CardTitle>Videos</CardTitle>
                <CardDescription>0</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Video Credits</CardTitle>
                <CardDescription>0</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plan</CardTitle>
                <CardDescription>Basic</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
