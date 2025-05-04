import React from "react";
import { TbPremiumRights } from "react-icons/tb";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { GiDeadWood } from "react-icons/gi";

function Programs() {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionHead icon={<TbPremiumRights />} title="Programs" />
        <div className="programs__wrapper">
          {programs.map(({ id, icon: Icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{<Icon />}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <GiDeadWood />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
