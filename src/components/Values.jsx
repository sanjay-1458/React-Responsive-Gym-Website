import React from "react";
import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { SiOpenaigym } from "react-icons/si";
import { values } from "../data";
import Card from "../UI/Card";

function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image"></img>
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<SiOpenaigym />} title="Values"></SectionHead>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            incidunt ut amet a?
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon: Icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{<Icon />}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
