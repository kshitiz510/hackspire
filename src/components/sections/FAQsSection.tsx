import React, { useState } from "react";
import FAQItem from "../common/FAQItem";

const FAQsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in Hackspire?",
      answer:
        "Hackspire is open to all college students, regardless of their branch or year of study. Whether you're a beginner or an experienced coder, you're welcome to participate. We highly encourage beginners to join and explore the world of hackathons with the guidance of mentors and peers.",
    },
    {
      question: "What is the team size?",
      answer:
        "Participants can register in teams of 2 to 5 members. Collaborating in a team allows you to brainstorm ideas, divide tasks, and build innovative projects together.",
    },
    {
      question: "Do I need prior hackathon experience?",
      answer:
        "Not at all! Hackspire is designed to be beginner-friendly. We provide mentorship throughout the event to help you with your project. Whether you're a first-timer or a seasoned hacker, Hackspire is the perfect platform to learn, innovate, and grow.",
    },
    {
      question: "What should I bring?",
      answer:
        "You should bring your laptop, chargers, a valid college ID, and any personal essentials you may need during the event. We’ll provide meals and overnight accommodation for all registered participants, so you can focus entirely on your project.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects will be judged on innovation, technical complexity, feasibility, and impact. Focus on creating a unique, technically advanced, and practical solution that effectively addresses the problem.",
    },
    {
      question: "Are there prizes?",
      answer:
        "Absolutely! Hackspire offers exciting prizes for the top teams, including cash rewards, exclusive swag, and certificates of recognition. Additionally, participants will have the opportunity to network with industry professionals and showcase their skills.",
    },
    {
      question: "How do I register?",
      answer:
        "You can register through Devfolio, our official registration platform. Simply visit the Hackspire page on Devfolio, create an account (if you don’t already have one), and complete the registration process. Stay tuned to our social media channels for updates on deadlines and other important announcements.",
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