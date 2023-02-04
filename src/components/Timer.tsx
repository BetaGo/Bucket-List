import React, { useState, useEffect } from "react";

const Timer = () => {
  const [lifeTime, setLifeTime] = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const birth = new Date("1994-09-28");
    let timer = setInterval(() => {
      const totalSec = (Date.now() - birth.valueOf()) / 1000;
      const day = Math.floor(totalSec / (24 * 60 * 60));
      let rest = totalSec - day * 24 * 60 * 60;
      const hour = Math.floor(rest / (60 * 60));
      rest = rest - hour * (60 * 60);
      const min = Math.floor(rest / 60);
      const sec = Math.floor(rest - min * 60);
      setLifeTime({
        day,
        hour,
        min,
        sec,
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-6 font-bold">
      <div className="nes-container is-rounded with-title is-centered">
        <div className="title">Time Waits for No Man</div>
        <pre className="flex items-center text-center text-lg justify-evenly">
          <div className="min-w-16 flex flex-col items-center">
            {lifeTime.day}
            <div>DAYS</div>
          </div>
          <div className="min-w-16 flex flex-col items-center">
            {lifeTime.hour}
            <div>HOURS</div>
          </div>
          <div className="min-w-16 flex flex-col items-center">
            {lifeTime.min}
            <div>MINUTES</div>
          </div>
          <div className="min-w-16 flex flex-col items-center">
            {lifeTime.sec}
            <div>SECONDS</div>
          </div>
        </pre>
        <progress
          className="nes-progress is-pattern"
          value={(lifeTime.day / (365 * 60)) * 100}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Timer;
