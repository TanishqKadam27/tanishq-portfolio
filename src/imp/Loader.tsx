import React, { useEffect, useState } from "react";

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(i);
          setTimeout(onFinish, 500);
          return 100;
        }
        return p + 10;
      });
    }, 200);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="glitch" data-text="LOADING...">LOADING...</h1>
      <div className="w-60 h-2 bg-gray-800 mt-4">
        <div className="bg-green-400 h-2" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Loader;
