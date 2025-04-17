import React, { useState } from "react";
import FAQItem from "../common/FAQItem";

const FAQsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a Hackathon?",
      answer:
        "A hackathon is an event where programmers, designers, and developers collaborate intensively on software projects.",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone with a passion for technology and innovation can participate, including students and professionals.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, chargers, and any other tools you need for development. Snacks and enthusiasm are also welcome!",
    },
    {
      question: "Are there any prizes?",
      answer:
        "Yes, there are exciting prizes for the winners, along with networking opportunities and learning experiences.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-16 px-4 text-white">
      {/* Title */}
      <h2 className="text-6xl md:text-7xl mb-12 font-coalition text-[#ffeed7]">FAQs</h2>

      {/* FAQ Table */}
      <div className="w-full max-w-4xl border-2 border-[#B3A790] rounded-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-[#B3A790] ${
              index === faqs.length - 1 ? "border-none" : ""
            }`}
          >
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
