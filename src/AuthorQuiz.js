import React from "react";
import Footer from "./Footer";
import Continue from "./Continue";
import Hero from "./Hero";
import Turn from "./Turn";
import "./App.css";
import "./bootstrap.min.css";

function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
  return (
    <div className="container-fluid">
      <Hero author={turnData.author} />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <div>sadsd</div>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
