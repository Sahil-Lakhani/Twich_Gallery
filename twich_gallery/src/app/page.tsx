"use client";

import React, { useState } from "react";
import Stream from "./components/stream";
import FloatingInput from "./components/inputField";

const Home: React.FC = () => {
  const [streams, setStreams] = useState<string[]>([]);

  const handleAddStream = (streamName: string) => {
    setStreams([...streams, streamName]);
  };

  const handleRemoveStream = (streamName: string) => {
    setStreams(streams.filter((stream) => stream !== streamName));
  };

  const gridClass =
    streams.length === 1
      ? "grid-cols-1 grid-rows-1"
      : streams.length === 2
      ? "grid-cols-2 grid-rows-1"
      : streams.length === 3
      ? "grid-cols-1 grid-rows-3"
      : streams.length === 4
      ? "grid-cols-2 grid-rows-2"
      : "";

  return (
    <div className="bg-white">
      <FloatingInput
        onAddStream={handleAddStream}
        streams={streams}
        removeStream={handleRemoveStream}
      />
      <div className={`grid ${gridClass}  h-screen`}>
        {streams.map((stream) => (
          <Stream key={stream} streamName={stream} />
        ))}
      </div>
    </div>
  );
};

export default Home;
