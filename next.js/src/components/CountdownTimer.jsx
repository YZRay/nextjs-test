"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(initialTime);
  };

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (days > 0) {
      return `${days} 天 ${hours} 時 ${minutes} 分 ${secs} 秒`;
    }
    if (hours > 0) {
      return `${hours} 時 ${minutes} 分 ${secs} 秒`;
    }
    if (minutes > 0) {
      return `${minutes} 分 ${secs} 秒`;
    }
    if (secs > 0) {
      return `${secs} 秒`;
    }
    return `時間到`;
  };

  return (
    <div className="flex gap-4 items-center p-4">
      <div>剩餘時間：{formatTime(timeLeft)}</div>
      <button
        type="button"
        onClick={resetTimer}
        className="cursor-pointer bg-blue-700 text-white rounded-2xl py-2 px-4"
      >
        Reset
      </button>
    </div>
  );
}
