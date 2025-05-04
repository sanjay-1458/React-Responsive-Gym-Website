import React from "react";
import "./plans.css";
import Header from "../../components/Header";
import { plans } from "../../data";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
function Plans() {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        architecto nihil alias in? Ab hic veritatis accusantium, possimus
        repellat iusto mollitia, quos excepturi asperiores libero distinctio
        iure numquam vel aspernatur molestias ad sunt ea a est assumenda ipsum
        totam nobis? Dolores dolor dolorum voluptate?
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plans">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Plans;
