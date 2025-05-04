import React from "react";
import "./gallery.css";
import Header from "../../components/Header.jsx";
import HeaderImage from "../../images/header_bg_3.jpg";
function Gallery() {
  const galleryLength = 15;
  const images = [];
  for (let i = 0; i < galleryLength; ++i) {
    images.push(`./src/images/gallery${i + 1}.jpg`);
  }
  return (
    <>
      <Header image={HeaderImage} title="Our Gallery">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat,
        perferendis quaerat atque, laboriosam quo non enim magni nihil, nemo
        ipsum reprehenderit?
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`}></img>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
