import React from "react";

function Loading() {
  return (
    <>
      <div className="Loading-container">
        <div className="Loading-item"></div>
      </div>
      <style jsx>{`
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .Loading-container {
          margin: 20px auto 0;
          display: flex;
          justify-content: center;
        }

        .Loading-item {
          width: 50px;
          height: 50px;
          border: 10px solid #f3f3f3;
          border-top: 10px solid #383636;
          border-radius: 50%;
          animation: spinner 1.5s linear infinite;
        }
      `}</style>
    </>
  );
}

export default Loading;