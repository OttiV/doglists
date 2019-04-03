import React from "react";
import { Link } from "react-router-dom";
// import DogList from "./DogList";

export default function DogBreedImages(props) {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      <li key={props.match.params.breed}>
        <Link to={`/dog-breeds/${props.match.params.breed}`}>
          {props.match.params.breed}
        </Link>
      </li>
      This page will show images of the {props.match.params.breed} breed.
      <br />
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
