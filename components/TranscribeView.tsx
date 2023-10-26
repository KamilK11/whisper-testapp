"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TextView from "./TextView";

import { useData } from "@/contexts/DataContext";
import { TranscribeClip } from "@/lib/whisper.actions";

const TranscribeView = () => {
  const [transcribeProgress, setTranscribeProgress] = useState(0);
  const [textList, setTextList] = useState<string[]>([]);
  const [text, setText] = useState("");

  const { data } = useData();

  const updateText = (value: number) => {
    setText(textList[value]);
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    let position = 0;

    const fetchData = async () => {
      try {
        const payload = {
          uu_id: data.uuid,
          id: position,
        };

        const response = await TranscribeClip(payload);

        if (response.data.status == "success") {
          setTextList((prevState) => [...prevState, ...response.data.text]);
          setTranscribeProgress(
            (prevState) => prevState + response.data.text.length,
          );

          position += response.data.text.length;
        }
        if (transcribeProgress == data.length) clearInterval(intervalId);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    if (data.length > 0) {
      fetchData();

      // Set an interval to fetch the data every 5 seconds.
      intervalId = setInterval(fetchData, 5000);
    }
    // Cleanup the interval on component unmount.
    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
      <div className="grid lg:grid-cols-5">
        <Sidebar
          length={data.length}
          transcribeProgress={transcribeProgress}
          updateText={updateText}
        />
        <TextView text={text} />
      </div>
    </div>
  );
};

export default TranscribeView;
