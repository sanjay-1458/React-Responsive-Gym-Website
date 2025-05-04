import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo"></img>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            perspiciatis?
          </p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/sanjaythakur2108/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/st2147/" target="_blank">
              <SiLeetcode />
            </a>
            <a href="https://github.com/sanjay-1458" target="_blank">
              {" "}
              <FaGithub />{" "}
            </a>
            <a href="https://codeforces.com/profile/sth_2108" target="_blank">
              {" "}
              <SiCodeforces />{" "}
            </a>
          </div>
        </article>
        <article>
            <h4>PermaLinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2025 &copy; All right reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
