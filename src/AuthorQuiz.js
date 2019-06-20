import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Continue from "./Continue";
import Hero from "./Hero";
import Turn from "./Turn";
import "./App.css";
import "./bootstrap.min.css";

function AuthorQuiz({ turnData, highlight, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero author={turnData.author} />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue show={highlight === "correct"} onContinue={onContinue} />
      <p>
        <Link to="/add">Add an Author</Link>
      </p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
