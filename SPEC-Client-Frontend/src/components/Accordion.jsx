import React, { useState, useRef, useEffect } from "react";
import x from "../assets/images/X.svg";
import plus from "../assets/images/Plus.svg";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(1);
  const refs = useRef([]);

  const faqData = [
    {
      question: "What products does JM Industries manufacture?",
      answer:
        "JM Industries manufactures high-quality bathroom fittings, accessories, and durable water solutions."
    },
    {
      question: "Are JM Industries products made in India?",
      answer:
        "Yes, all JM Industries products are proudly designed and manufactured in India using advanced technology and high-quality materials to meet international standards."
    },
    {
      question: "Do you provide warranty on your products?",
      answer:
        "Yes, we provide a warranty depending on the product category. Warranty cards are included with all purchases."
    },
    {
      question: "How can I purchase JM Industries products?",
      answer:
        "You can purchase through our authorized dealers or contact our sales team directly."
    },
    {
      question: "What makes JM Industries different from other brands?",
      answer:
        "Our products are crafted with precision, durability, and premium materials ensuring long-term performance."
    },
    {
      question: "Do you provide installation or after-sales support?",
      answer:
        "Yes, we offer dedicated after-sales support and professional installation services."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    faqData.forEach((_, i) => {
      const body = refs.current[i];
      if (!body) return;

      if (openIndex === i) {
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="w-full flex justify-center items-center">
      <section className="w-[85%] mx-auto max-sm:mt-[50px] mt-[140px] text-center">

        <h3 className="text-[var(--brown)] leading-none text-[70px] max-sm:text-[50px]">
          Faq
        </h3>

        <h2 className="text-[50px] font-bold max-sm:text-[25px] text-[var(--black)] mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="w-full gap-5 flex flex-col">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">

              <button
                onClick={() => handleToggle(index)}
                className={`w-full flex justify-between items-center max-sm:h-[60px] max-sm:gap-[8px]  h-[80px] px-6 py-[25px] text-left transition-all 
                  ${
                    openIndex === index
                      ? "bg-[var(--brown)] text-white"
                      : "bg-[#fff8ee] text-[var(--black)] "
                  }`}
              >
                <span className="text-[24px] mt-2 max-sm:w-[240px]  max-sm:text-[14px] font-semibold mb-2 ">
                  {item.question}
                </span>

           <span>
  <img
    src={openIndex === index ? x : plus}
    className={`h-6 w-6 max-sm:h-[17px] max-sm:w-[17px] transition-transform duration-3000 transform ${
      openIndex === index ? "rotate-180" : "rotate-0"
    }`}
  />
</span>

              </button>

              <div
                ref={(el) => (refs.current[index] = el)}
                className="overflow-hidden transition-all duration-300 "
                style={{ maxHeight: "0px" }}
              >
                <p className="text-white text-left   max-sm:text-[13px]  max-sm:py-[15px] bg-[var(--brown)] border-t border-opacity-[20%] border-white  font-medium text-[22px]  px-6 py-[25px]">
                  {item.answer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
