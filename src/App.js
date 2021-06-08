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
                projectThumbnail = {"/assets/images/drinkUpp_screenshot.PNG"}
                projectThumbnailAlt = {"drinkUpp App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"User Directory"}
                projectSubtitle = {"Search and Filter Users"}
                codeUrl = {"https://github.com/markdrecoll/userdirectory"}
                deployedLink = {"https://markdrecoll.github.io/portfolio/assets/images/user_directory_screenshot.PNG"}
                projectThumbnail = {"assets/images/user_directory_screenshot.png"}
                projectThumbnailAlt = {"User Directory App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"Budget Tracker"}
                projectSubtitle = {"Manage a Budget Database"}
                codeUrl = {"https://github.com/markdrecoll/progressiveBudgetTracker"}
                deployedLink = {"https://damp-everglades-37886.herokuapp.com/"}
                projectThumbnail = {"assets/images/budget_tracker_screenshot.PNG"}
                projectThumbnailAlt = {"Budget Tracker App"}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <Project
                projectTitle={"Team Profile Generator"}
                projectSubtitle = {"Generate Employee Cards"}
                codeUrl = {"https://github.com/markdrecoll/teamProfileGenerator"}
                deployedLink = {"https://github.com/markdrecoll/teamProfileGenerator"}
                projectThumbnail = {"assets/images/team_profile_generator_screenshot.PNG"}
                projectThumbnailAlt = {"Team Generator App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"Weather Dashboard"}
                projectSubtitle = {"Parse Weather Data"}
                codeUrl = {"https://github.com/markdrecoll/Weather_Dashboard"}
                deployedLink = {"https://markdrecoll.github.io/Weather_Dashboard/"}
                projectThumbnail = {"assets/images/weather_dashboard_screenshot.PNG"}
                projectThumbnailAlt = {"Weather Dashboard App"}
              />
            </div>
            <div class="col-sm">
              <Project
                projectTitle={"Fitness Tracker"}
                projectSubtitle = {"Save Workouts to a Database"}
                codeUrl = {"https://github.com/markdrecoll/FitnessTracker"}
                deployedLink = {"https://damp-cliffs-84726.herokuapp.com/"}
                projectThumbnail = {"assets/images/workout_dashboard_screenshot.PNG"}
                projectThumbnailAlt = {"Workout Dashboard App"}
              />
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
