"use client";

import React, { useState } from "react";
import Stream from "./components/stream";
import FloatingInput from "./components/inputField";

const Home: React.FC = () => {
  const [channels, setChannels] = useState<string[]>([]);

  // Function to add a channel to the list
  const handleAddChannel = (channelName: string) => {
    setChannels([...channels, channelName]);
  };

  const handleRemoveChannel = (channelName: string) => {
    setChannels(channels.filter((channel) => channel !== channelName));
  };

  const gridClass =
    channels.length === 1
      ? "grid-cols-1 grid-rows-1"
      : channels.length === 2
      ? "grid-cols-2 grid-rows-1"
      : channels.length === 3
      ? "grid-cols-1 grid-rows-3"
      : channels.length === 4
      ? "grid-cols-4 grid-rows-4"
      : "";

  return (
    <div className="bg-white">
      <FloatingInput
        onAddChannel={handleAddChannel}
        channels={channels}
        removeChannel={handleRemoveChannel}
      />
      <div className={`grid ${gridClass}  h-screen`}>
        {channels.map((channel) => (
          <Stream key={channel} channelName={channel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
