import React, { useRef, useEffect, useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden">
      {/* Question */}
      <div
        className="flex justify-between items-center px-6 py-4 cursor-pointer text-white bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors duration-300"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <button
          className={`text-2xl font-bold transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </button>
      </div>

      {/* Answer with Animation */}
      <div
        className="px-6 text-[#B3A790] text-lg bg-[#131313] transition-all duration-500"
        style={{
          maxHeight: `${height}px`, 
          opacity: isOpen ? 1 : 0, 
        }}
        ref={contentRef}
      >
        <div className="py-4">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;