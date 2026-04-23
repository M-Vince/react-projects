import { useState } from "react";
import "./ToggleVisibility.css";

export default function ToggleVisibility() {
  const [active, setActive] = useState(true);

  const toggleDetails = () => {
    setActive(!active);
  };

  return (
    <>
      <button onClick={() => toggleDetails()}>
        {" "}
        {active ? "Show Details" : "Hide Details"}{" "}
      </button>
      <section className={active ? "hidden" : undefined}>
        <div>
          Details: React is a JavaScript library for building UIs.
        </div>
      </section>
    </>
  );
}
