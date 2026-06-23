"use client";
import React from "react";

const GRID_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const GridComponent = () => {
  const [selectedGridItems, setSelectedGridItems] = React.useState<
    Array<number>
  >([]);
  const [selectedGridSequences, setSelectedGridSequences] = React.useState<
    Array<number>
  >([]);
  const handleGridItemClick = (item: number, index: number) => {
    setSelectedGridItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item],
    );
    setSelectedGridSequences((prevSequences) => [...prevSequences, index + 1]);
  };

  return (
    <div className="max-w-sm mx-auto grid mt-20 grid-cols-3 gap-4">
      {GRID_ITEMS.map((item: number, index: number) => (
        <div
          key={item}
          className={`bg-gray-200 p-4 h-4 w-4 flex items-center justify-center text-center cursor-pointer transition-colors duration-200 ${
            selectedGridItems.includes(item)
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-300"
          }`}
          onClick={() => handleGridItemClick(item, index)}
        >
          <span className="font-bold text-black">
            {selectedGridSequences.includes(index + 1)
              ? selectedGridSequences.indexOf(index + 1) + 1
              : ""}
          </span>
        </div>
      ))}

      <div className="flex items-center justify-center col-span-3 mt-4">
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 hover:cursor-pointer transition-colors duration-200"
          onClick={() => {
            setSelectedGridItems([]);
            setSelectedGridSequences([]);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
