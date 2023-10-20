"use client";

import React, { useState } from "react";

const Feed = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div className="bg-light_grey flex-1">
      {isEmpty && (
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h2 className="text-medium_grey">
            This board is empty. Create a new column to get started.
          </h2>
          <button className="btn btn-primary-lg px-[18px]">
            + Add New Column
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
