"use client";

import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CheckCircledIcon, CircleIcon } from "@radix-ui/react-icons";

import { generateTimeline } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface Props {
  length: number;
  transcribeProgress: number;
  updateText: Function;
}

const Sidebar = ({ length, transcribeProgress, updateText }: Props) => {
  const [active, setActive] = useState(0);

  const timeLineList = generateTimeline(length);

  const handleClick = (index: number) => {
    if (index) setActive(index);
    updateText(index);
  };

  return (
    <div className="pb-1 hidden lg:block">
      <div className="space-y-4 py-4">
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            TimeLine
          </h2>
          <ScrollArea className="h-[400px] px-1">
            <div className="space-y-1 p-2">
              {timeLineList?.map((timeLine, i) => (
                <Button
                  key={`${timeLine.label}-${i}`}
                  variant="ghost"
                  className={`${
                    i == active && "bg-accent text-accent-foreground"
                  } w-full font-normal flex justify-between`}
                  onClick={() => handleClick(i)}
                >
                  {timeLine.label}
                  {timeLine.status ? <CheckCircledIcon /> : <CircleIcon />}
                </Button>
              ))}
            </div>
          </ScrollArea>

          {length > 0 && (
            <Progress
              className="mt-10 w-3/4 mx-auto"
              value={Math.floor((transcribeProgress * 100) / length)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
