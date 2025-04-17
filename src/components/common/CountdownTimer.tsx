import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Function to calculate time left
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();

    // Update time left every minute
    const timer = setInterval(calculateTimeLeft, 60000);

    // Clear interval on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    // Container with margin top
    <div className="mt-6">
      {/* Flex container for timer blocks */}
      <div className="flex space-x-6">
        {/* Map over time values to render each block */}
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
        ].map(({ label, value }, idx) => (
          // Individual timer block
          <div key={idx} className="flex flex-col items-center">
            {/* Time bubble */}
            <div className="w-[60px] h-[75px] bg-[#71221E] text-white rounded-[12px] flex items-center justify-center text-3xl font-bold">
              {value < 10 ? `0${value}` : value}
            </div>
            {/* Time label */}
            <p className="mt-2 text-lg text-white">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
