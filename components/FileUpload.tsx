"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";

import { fileToBase64, generateUUID } from "@/lib/utils";
import { uploadFile } from "@/lib/whisper.actions";

import { useData } from "@/contexts/DataContext";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { setData } = useData();

  const { toast } = useToast();

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No File Selected",
        description: "Please select file to upload",
        action: <ToastAction altText="Goto select">Undo</ToastAction>,
      });
      return;
    }

    setUploading(true);

    const audioString = await fileToBase64(selectedFile);
    const generatedUuId = generateUUID();

    const payload = {
      uu_id: generatedUuId,
      audio_string: audioString,
      time_step: 30,
    };

    const response = await uploadFile(payload);

    setUploading(false);

    if (response.status === 200) {
      setData((prevData) => ({
        ...prevData,
        uuid: generatedUuId,
      }));

      setData((prevData) => ({
        ...prevData,
        length: Math.floor(response.data.max_length),
      }));
    } else {
      toast({
        title: "Uploading Error",
        description: "Error happened while uploading",
        action: <ToastAction altText="Goto select">Undo</ToastAction>,
      });
    }
  };

  return (
    <div className="flex ml-auto mr-4 items-center space-x-2">
      <Input
        id="file_input"
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
      />
      {uploading ? (
        <Button disabled>
          {" "}
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading ...
        </Button>
      ) : (
        <Button
          variant="outline"
          className="ml-auto hidden h-8 lg:flex p-[18px]"
          onClick={handleFileUpload}
        >
          Upload
        </Button>
      )}
    </div>
  );
};

export default FileUpload;
