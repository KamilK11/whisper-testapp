import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CheckCircledIcon, StopwatchIcon } from "@radix-ui/react-icons";

export const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
];

const Sidebar = () => {
  return (
    <div className="pb-12 hidden lg:block">
      <div className="space-y-4 py-4">
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            TimeLine
          </h2>
          <ScrollArea className="h-[400px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full font-normal flex justify-between"
                >
                  {playlist}
                  <CheckCircledIcon />
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
