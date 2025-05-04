import React from "react";
import { faqs } from "../data";
import SectionHead from "./SectionHead";
import { FaQuestionCircle } from "react-icons/fa";
import FAQ from "./FAQ";

function FAQs() {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestionCircle />} title="FAQs" />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
