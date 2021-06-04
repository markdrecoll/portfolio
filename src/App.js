import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Project
                projectTitle={"drinkUpp"}
                projectSubtitle = {"Search for Drinks Based on Ingredient"}
                codeUrl = {"https://github.com/markdrecoll/drinkUpp"}
                deployedLink = {"https://markdrecoll.github.io/drinkUpp/"}
                projectThumbnail = {"/assets/images/drinkUpp_screenshot.png"}
                projectThumbnailAlt = {"drinkUpp App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"drinkUpp"}
                projectSubtitle = {"Search for Drinks Based on Ingredient"}
                codeUrl = {"https://github.com/markdrecoll/drinkUpp"}
                deployedLink = {"https://markdrecoll.github.io/drinkUpp/"}
                projectThumbnail = {"/assets/images/drinkUpp_screenshot.png"}
                projectThumbnailAlt = {"drinkUpp App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"drinkUpp"}
                projectSubtitle = {"Search for Drinks Based on Ingredient"}
                codeUrl = {"https://github.com/markdrecoll/drinkUpp"}
                deployedLink = {"https://markdrecoll.github.io/drinkUpp/"}
                projectThumbnail = {"/assets/images/drinkUpp_screenshot.png"}
                projectThumbnailAlt = {"drinkUpp App"}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <Project
                projectTitle={"drinkUpp"}
                projectSubtitle = {"Search for Drinks Based on Ingredient"}
                codeUrl = {"https://github.com/markdrecoll/drinkUpp"}
                deployedLink = {"https://markdrecoll.github.io/drinkUpp/"}
                projectThumbnail = {"/assets/images/drinkUpp_screenshot.png"}
                projectThumbnailAlt = {"drinkUpp App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"drinkUpp"}
                projectSubtitle = {"Search for Drinks Based on Ingredient"}
                codeUrl = {"https://github.com/markdrecoll/drinkUpp"}
                deployedLink = {"https://markdrecoll.github.io/drinkUpp/"}
                projectThumbnail = {"/assets/images/drinkUpp_screenshot.png"}
                projectThumbnailAlt = {"drinkUpp App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"drinkUpp"}
                projectSubtitle = {"Search for Drinks Based on Ingredient"}
                codeUrl = {"https://github.com/markdrecoll/drinkUpp"}
                deployedLink = {"https://markdrecoll.github.io/drinkUpp/"}
                projectThumbnail = {"/assets/images/drinkUpp_screenshot.png"}
                projectThumbnailAlt = {"drinkUpp App"}
              />
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
