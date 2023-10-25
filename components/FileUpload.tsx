"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const { toast } = useToast();

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    // toast({
    //   title: "Scheduled: Catch up ",
    //   description: "Friday, February 10, 2023 at 5:57 PM",
    //   action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    // });
  };

  return (
    <div className="flex ml-auto mr-4 items-center space-x-2">
      <Input
        id="file_input"
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
      />
      <Button
        variant="outline"
        className="ml-auto hidden h-8 lg:flex p-[18px]"
        onClick={handleFileUpload}
      >
        Upload
      </Button>
    </div>
  );
};

export default FileUpload;
