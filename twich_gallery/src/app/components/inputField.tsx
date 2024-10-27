import React, { useState } from "react";

interface FloatingInputProps {
  onAddChannel: (channelName: string) => void;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ onAddChannel }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [channelName, setChannelName] = useState<string>("");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.target.value);
  };

  const handleAddStream = () => {
    if (channelName.trim()) {
      onAddChannel(channelName.trim());
      setChannelName("");
    }
  };

  return (
    <div
      className="fixed top-4 right-4 bg-white shadow-lg rounded-md p-4 z-100"
      style={{ zIndex: 100 }}
    >
      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-2"
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>

      {isExpanded && (
        <div>
          <input
            type="text"
            value={channelName}
            onChange={handleInputChange}
            placeholder="Enter channel name"
            className="border rounded p-2 w-full mb-2"
          />
          <button
            onClick={handleAddStream}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Add Stream
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
