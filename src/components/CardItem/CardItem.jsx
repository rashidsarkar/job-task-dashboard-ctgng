import React from "react";
import "./carditem.css"; // For any additional custom styles

function CardItem({ text, assing, video, value }) {
  return (
    <div className="relative flex rounded-lg shadow-lg myMainItem hover:bg-gradient-to-r from-purple-400 to-blue-500 hover:text-white">
      <div className="p-4 py-8 w-9/10">
        <div className="mb-4">
          <h2 className="font-semibold">{text}</h2>
          <p className="text-sm">
            {assing} • {video}
          </p>
        </div>

        <button className="w-full py-2 font-semibold text-white rounded-lg mybtn bg-gradient-to-r from-purple-400 to-blue-500 group-hover:bg-white group-hover:text-blue-500">
          Continue Course
        </button>
      </div>
      <div className="flex items-center justify-center p-4 w-1/10">
        <div className="">
          <div
            className="radial-progress text-[#061558]"
            style={{ "--value": value }}
            role="progressbar"
          >
            <div className="flex items-center justify-center w-10 h-10 font-semibold text-gray-900 bg-white rounded-full">
              <div className="flex flex-col">
                <span className="text-sm">{value}%</span>
                <span className="text-[6px]">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
