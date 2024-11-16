import React from "react";

interface StreamProps {
  streamName: string;
}

const Stream: React.FC<StreamProps> = ({ streamName }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={`https://player.twitch.tv/?channel=${streamName}&parent=localhost`}
        className="w-full h-full"
        allowFullScreen={true}
        title="Twitch Stream"
      ></iframe>
    </div>
  );
};

export default Stream;
