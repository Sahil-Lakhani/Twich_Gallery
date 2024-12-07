import React from "react";
import Stream from "./stream";

interface StreamLayoutProps {
  streamNames: string[];
}

const calculateLayout = (
  streamCount: number
): {
  rows: number;
  layout: number[];
} => {
  if (streamCount <= 0) return { rows: 0, layout: [] };
  if (streamCount === 1) return { rows: 1, layout: [1] };
  if (streamCount === 2) return { rows: 1, layout: [2] };
  if (streamCount === 3) return { rows: 2, layout: [1, 2] };
  if (streamCount === 4) return { rows: 2, layout: [2, 2] };
  if (streamCount === 5) return { rows: 2, layout: [2, 3] };
  if (streamCount === 6) return { rows: 2, layout: [3, 3] };
  if (streamCount === 7) return { rows: 3, layout: [1, 3, 3] };
  if (streamCount === 8) return { rows: 3, layout: [2, 3, 3] };
  if (streamCount === 9) return { rows: 3, layout: [3, 3, 3] };
  if (streamCount === 10) return { rows: 3, layout: [2, 4, 4] };
  if (streamCount === 11) return { rows: 3, layout: [3, 4, 4] };
  if (streamCount === 12) return { rows: 3, layout: [4, 4, 4] };
  if (streamCount === 13) return { rows: 4, layout: [1, 4, 4, 4] };
  if (streamCount === 14) return { rows: 4, layout: [2, 4, 4, 4] };
  if (streamCount === 15) return { rows: 4, layout: [3, 4, 4, 4] };

  // For 16 or more streams, create rows of 4
  const rows = Math.ceil(streamCount / 4);
  const layout = Array(rows).fill(4);
  const remainder = streamCount % 4;

  if (remainder > 0) {
    layout[0] = remainder;
  }

  return { rows, layout };
};

const StreamLayout: React.FC<StreamLayoutProps> = ({ streamNames }) => {
  const { layout } = calculateLayout(streamNames.length);
  let streamIndex = 0;

  return (
    <div className="w-full h-full flex flex-col">
      {layout.map((streamsInRow, rowIndex) => {
        const rowStreams = streamNames.slice(
          streamIndex,
          streamIndex + streamsInRow
        );
        streamIndex += streamsInRow;

        const rowHeight = `${100 / layout.length}%`;

        return (
          <div key={rowIndex} className="flex" style={{ height: rowHeight }}>
            {rowStreams.map((streamName, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                style={{ width: `${100 / streamsInRow}%` }}
              >
                <Stream streamName={streamName} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default StreamLayout;
