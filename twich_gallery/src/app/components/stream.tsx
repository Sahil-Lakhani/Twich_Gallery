import React from "react";

interface StreamProps {
  channelName: string;
}

const Stream: React.FC<StreamProps> = ({ channelName }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={`https://player.twitch.tv/?channel=${channelName}&parent=localhost`}
        className="w-full h-full"
        allowFullScreen={true}
        title="Twitch Stream"
      ></iframe>
    </div>
  );
};

export default Stream;
