import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import Image from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
  return (
    <>
      <Header title="Get In Touch" image={Image}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ut
        ratione, sequi harum nemo debitis culpa rerum deleniti quidem?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:" target="_blank">
              <MdEmail />
            </a>
            <a href="https://www.example.com" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
