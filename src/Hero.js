import React from "react";
import "./App.css";
import "./bootstrap.min.css";

function Hero({ author }) {
  return (
    <div className="jumbotron col-10 offset-1 bg-dark text-white">
      <h1>Author Quiz</h1>
      <p> Select the book written by Author show.</p>
      <div className="card text-dark bg-light mb-3">
        <div className="card-body">
          <h3>
            Which of the following book is written by <b>{author.name}?</b>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
