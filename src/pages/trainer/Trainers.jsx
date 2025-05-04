import React from "react";
import "./trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";
function Trainers() {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe
        tempora at quos cupiditate maiores numquam quia ipsa.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <FaInstagram />, link: socials[0] },
                  { icon: <FaTwitter />, link: socials[1] },
                  { icon: <CiFacebook />, link: socials[2] },
                  { icon: <CiLinkedin />, link: socials[3] },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Trainers;
