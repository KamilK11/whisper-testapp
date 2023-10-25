import { Metadata } from "next";

import FileUpload from "@/components/FileUpload";
import TranscribeView from "@/components/TranscribeView";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function Home() {
  return (
    <>
      <div className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
        <div className="pt-20 px-40">
          <div className="space-between flex items-center">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Speech to Text
              </h2>
              <p className="text-sm text-muted-foreground">
                Convert your audio to text.
              </p>
            </div>

            <FileUpload />
          </div>
          <Separator className="my-4" />
          <TranscribeView />
        </div>
      </div>
    </>
  );
}
