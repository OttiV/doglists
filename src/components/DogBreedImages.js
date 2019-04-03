import React from "react";
import { Link } from "react-router-dom";
// import DogListContainer from "./DogsListContainer";

export default function DogBreedImages(props) {
  const images = props.images;
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      {/* <li key={props.match.params.breed}>
        <Link to={`/dog-breeds/${props.match.params.breed}`}>
          {props.match.params.breed}
        </Link>
      </li> */}
      This page will show images of the {props.name} breed.
      <br />
      <Link to="/">Go back to the index</Link>
      <div>
        {images &&
          props.images.map(url => <img key={url} src={url} alt="Dog" />)}
        {!images && "Loading..."}
      </div>
    </div>
  );
}
