import "../css/styles.css";
import Header from "./Header";
import Introduction from "./Introduction";
import Services from "./Services";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Services />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}
