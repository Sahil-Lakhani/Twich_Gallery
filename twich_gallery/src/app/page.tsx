"use client";

import React, { useState } from "react";
import StreamLayout from "./components/streamLayout";
import FloatingInput from "./components/inputField";

const Home: React.FC = () => {
  const [streams, setStreams] = useState<string[]>([]);

  const handleAddStream = (streamName: string) => {
    setStreams([...streams, streamName]);
  };

  const handleRemoveStream = (streamName: string) => {
    setStreams(streams.filter((stream) => stream !== streamName));
  };

  return (
    <div className="bg-white h-screen">
      <FloatingInput
        onAddStream={handleAddStream}
        streams={streams}
        removeStream={handleRemoveStream}
      />
      <div className="h-screen">
        <StreamLayout streamNames={streams} />
      </div>
    </div>
  );
};

export default Home;