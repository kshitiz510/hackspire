import React, { useState } from "react";
import FAQItem from "../common/FAQItem";

const FAQsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      "question": "Who can participate in Hackspire?",
      "answer": "Hackspire is open to all college students, from any branch or year. Beginners are encouraged to join and explore with help from mentors and peers."
    },
    {
      "question": "What is the team size?",
      "answer": "Teams can have 2 to 5 members. Teamwork helps with idea sharing, task division, and collaborative project building."
    },
    {
      "question": "Do I need prior hackathon experience?",
      "answer": "No experience needed! Hackspire is beginner-friendly and offers mentorship. Whether you're new or experienced, you'll learn and grow."
    },
    {
      "question": "What should I bring?",
      "answer": "Bring your laptop, chargers, college ID, and essentials. We'll provide meals and overnight stay so you can focus on building."
    },
    {
      "question": "What are the judging criteria?",
      "answer": "Judging is based on innovation, technical complexity, feasibility, and impact. Build something unique, practical, and technically solid."
    },
    {
      "question": "Are there prizes?",
      "answer": "Yes! Top teams get cash, swag, and certificates. You'll also connect with professionals and showcase your skills."
    },
    {
      "question": "How do I register?",
      "answer": "Register via Devfolio. Visit our page, sign in or create an account, and complete the form. Follow our socials for updates."
    }
  ]
  

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