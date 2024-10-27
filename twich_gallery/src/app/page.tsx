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

  return (
    <div className="bg-white">
      <FloatingInput onAddChannel={handleAddChannel} />
      <div
        className={`grid gap-4 ${
          channels.length === 1
            ? "grid-cols-1"
            : channels.length === 2
            ? "grid-cols-2"
            : "grid-cols-3"
        } md:grid-cols-2 lg:grid-cols-3`}
      >
        {channels.map((channel) => (
          <Stream key={channel} channelName={channel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
