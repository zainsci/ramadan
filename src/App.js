import "./styles/styles.css";
import "./styles/normalize.css";
import Hero from "./components/hero";
import Header from "./components/header";
import SocialIcons from "./components/social-icons";

function App() {
  return (
    <div
      className="App"
      style={{
        "background-image":
          "url(" + process.env.PUBLIC_URL + "/assets/pattern.png)",
      }}
    >
      <Header />
      <Hero />
      <SocialIcons />
    </div>
  );
}

export default App;
