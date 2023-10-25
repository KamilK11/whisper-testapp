"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TextView from "./TextView";

import { useData } from "@/contexts/DataContext";

const TranscribeView = () => {
  const [transcribeProgress, setTranscribeProgress] = useState(0);
  const [textList, setTextList] = useState([]);
  const [text, setText] = useState("");

  const { data } = useData();

  const updateText = (value: number) => {
    setText(textList[value]);
  };

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
