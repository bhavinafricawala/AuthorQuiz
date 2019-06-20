import React from "react";
import AuthorForm from "./AuthorForm";
import "./AddAuthorForm.css";

function AddAuthorForm({ match, onAddAuthor }) {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <p>
        <AuthorForm onAddAuthor={onAddAuthor} />
      </p>
    </div>
  );
}

export default AddAuthorForm;
