import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
function FAQ({ question, answer }) {
  const [isAnswer, setIsAnswer] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => {
        setIsAnswer(!isAnswer);
      }}
    >
      <div className="">
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isAnswer && <p>{answer}</p>}
    </article>
  );
}

export default FAQ;
