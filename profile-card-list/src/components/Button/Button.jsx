import { useState } from "react";
import "./Button.css";

export default function Button({ children, onFollow, className }) {
  return <button className={className} onClick={onFollow}> {children} </button>;
}
