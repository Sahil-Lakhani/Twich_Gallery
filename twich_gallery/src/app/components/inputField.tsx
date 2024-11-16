import React, { useState } from "react";

interface FloatingInputProps {
  onAddStream: (streamName: string) => void;
  streams: string[];
  removeStream: (streamName: string) => void;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  onAddStream,
  streams,
  removeStream,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [streamName, setStreamName] = useState<string>("");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreamName(e.target.value);
  };

  const handleAddStream = () => {
    if (streamName.trim()) {
      onAddStream(streamName.trim());
      setStreamName("");
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
            value={streamName}
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

          <div>
            <h3 className="font-semibold mb-2">Channel List:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {streams.map((stream) => (
                <li key={stream} className="border-2 flex justify-between">
                  {stream}
                  <button
                    onClick={() => removeStream(stream)}
                    className="text-red-500 mr-2"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
