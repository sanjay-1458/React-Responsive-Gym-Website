import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { AiFillCopy } from "react-icons/ai";
import { testimonials } from "../data";
import Card from "../UI/Card";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const { id, name, quote, job, avatar } = testimonials[index];
  const maxSize=testimonials.length;
  return (
    <section className="testimonial">
      <div className="container testimonial__container">
        <div className="">
          <SectionHead
            icon={<AiFillCopy />}
            title="Testimonials"
            className="testimonial__head"
          />
        </div>
        <Card className="testimonial" key={id}>
          <div className="testimonial__avatar">
            <img src={avatar} alt={`Testimonial Avatar ${name}`} />
          </div>
          <p className="testimonial__quote">{quote}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonial__btn-container">
          <button className="testimonial__btn" onClick={()=>{
            setIndex((index)=>index==0?maxSize-1:index-1);
          }}>
            <FaArrowAltCircleLeft />
          </button>
          <button className="testimonial__btn" onClick={()=>{
            setIndex((index)=>index==maxSize-1?0:index+1);
          }}>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
