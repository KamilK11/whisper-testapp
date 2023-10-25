import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result
        ?.toString()
        .replace(/^data:(.*;base64,)?/, "");
      if (encoded && encoded.length % 4 > 0) {
        encoded += "=".repeat(4 - (encoded.length % 4));
      }
      resolve(encoded || "");
    };
    reader.onerror = (error) => reject(error);
  });
};

export const generateUUID = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

type Timeline = {
  label: string;
  status: boolean;
};

export const generateTimeline = (seconds: number): Timeline[] => {
  const segmentDuration = 30;
  const timelines: Timeline[] = [];

  const numSegments =
    Math.floor(seconds / segmentDuration) +
    (seconds % segmentDuration !== 0 ? 1 : 0);

  for (let i = 0; i < numSegments; i++) {
    const startTime = i * segmentDuration;
    let endTime = startTime + segmentDuration;

    // If it's the last segment and there's a remainder, adjust the end_time
    if (i === numSegments - 1 && seconds % segmentDuration !== 0) {
      endTime = seconds;
    }

    // Convert the times to HH:MM:SS format
    const startLabel = formatTime(startTime);
    const endLabel = formatTime(endTime);

    const timeline = {
      id: i,
      label: `${startLabel} - ${endLabel}`,
      status: false,
    };

    timelines.push(timeline);
  }

  return timelines;
};

function formatTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;
}

function pad(num: number, size: number): string {
  let s = String(num);
  while (s.length < size) s = "0" + s;
  return s;
}
