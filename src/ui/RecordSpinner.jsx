import React from "react";

const RecordSpinner = ({ refetch }) => {
  return (
    <>
      <div className="mt-4   flex h-full w-full flex-col items-center justify-center gap-2 overflow-y-scroll  shadow-inner">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
      <div className="flex w-full items-center justify-center">
        <button className="btn btn-success px-10 py-2 " onClick={refetch}>
          Refresh
        </button>
      </div>
    </>
  );
};

export default RecordSpinner;
