import React from "react";
import { useRef } from "react";
import "./NewMovieForm.css";

function NewMovieForm() {
  const titleInputRef = useRef();
  const ImageRef = useRef();
  const ImdbRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); // prevent default behavior of submit

    const enteredTitle = titleInputRef.current.value;
    const enteredImg = ImageRef.current.value;
    const enteredImdb = ImdbRef.current.value;
    const enteredDesc = descriptionRef.current.value;

    const movieData = {
      title: enteredTitle,
      imdb: enteredImdb,
      imageUrl: enteredImg,
      description: enteredDesc,
    };

    // console.log (movieData)
    const baseURL =
      "http://ec2-54-175-12-247.compute-1.amazonaws.com:8200/movies/add";
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((response) => {
        alert("Movie added..");
      })
      .catch((error) => {
        alert("Error.!");
      });
  }

  return (
    <div className="item">
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label>Movie Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className="control">
          <label>Movie Image</label>
          <input type="url" id="image" required ref={ImageRef} />
        </div>
        <div className="control">
          <label>Movie Imdb</label>
          <input type="text" id="imdb" required ref={ImdbRef} />
        </div>
        <div className="control">
          <label>Movie Description</label>
          <textarea id="description" required rows="5" ref={descriptionRef} />
        </div>
        <div className="actions">
          <button>Add Movie</button>
        </div>
      </form>
    </div>
  );
}
export default NewMovieForm;
