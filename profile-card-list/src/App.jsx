import ProfileCard from "./components/ProfileCard/ProfileCard";
import { USER_PROFILE } from "../src/data.js";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1> Profile Card List</h1>
        <section className="card-section">
          {USER_PROFILE.map((item) => (
            <ProfileCard key={item.id}  {...item} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
