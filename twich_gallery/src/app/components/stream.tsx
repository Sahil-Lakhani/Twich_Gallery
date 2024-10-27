import React from "react";

interface StreamProps {
  channelName: string;
}
const Stream: React.FC<StreamProps> = ({ channelName }) => {
  return (
    <div>
      <iframe
        src={`https://player.twitch.tv/?channel=${channelName}&parent=localhost`}
        height="480"
        width="720"
        allowFullScreen={true}
        title="Twitch Stream"
      ></iframe>
    </div>
  );
};

export default Stream;
