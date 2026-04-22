import "./ProfileCard.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";

export default function ProfileCard({ name, job_title, bio, image }) {
  const [follow, setFollow] = useState("Follow");

  const handleClick = (text) => {
    text === follow ? setFollow('Following') : setFollow('Follow');
  };

  return (
    <div className="container">
      <div className="user-details">
        <img src={image} alt="image here" />
        <h2> {name} </h2>
        <p> {job_title} </p>
        <div className="user-button">
          <Button> Message </Button>
          <Button className='follow' onFollow={() => handleClick("Follow")}> {follow} </Button>
        </div>
      </div>
      <div className="user-bio">
        <h4> About Me </h4>
        <p className="bio"> {bio} </p>
      </div>
    </div>
  );
}
