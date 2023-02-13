import React from "react";
import "../styles/pages/Novedades.css";
import novedades from "../images/novedades.png";

const Novedades = () => {
  return (
    <main className="news-main-container">
      <div className="home-img">
        <img className="dronebanner" src={novedades} alt="" />
      </div>
      <div className="novedades">
        <h2>Novedades</h2>
      </div>
      <div className="novedades-card">
        <h3>Novedad 1</h3>
        <h4>Subtitulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          mollitia rerum illo neque sed! Quibusdam perspiciatis expedita aut
          magnam impedit deserunt. Vitae maiores molestias unde rerum sint
          provident maxime ad!
        </p>
        <hr />
      </div>
      <div className="novedades-card">
        <h3>Novedad 1</h3>
        <h4>Subtitulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          mollitia rerum illo neque sed! Quibusdam perspiciatis expedita aut
          magnam impedit deserunt. Vitae maiores molestias unde rerum sint
          provident maxime ad!
        </p>
        <hr />
      </div>
      <div className="novedades-card">
        <h3>Novedad 1</h3>
        <h4>Subtitulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          mollitia rerum illo neque sed! Quibusdam perspiciatis expedita aut
          magnam impedit deserunt. Vitae maiores molestias unde rerum sint
          provident maxime ad!
        </p>
        <hr />
      </div>
    </main>
  );
};

export default Novedades;
