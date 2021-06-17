import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Chicago Boating App"}
              projectSubtitle={"Create itineraries for Chicago boat attractions."}
              codeUrl={"https://github.com/markdrecoll/chicagoboatingapp"}
              deployedLink={"https://chicagoboatingapp.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/chicagoBoatingApp_Screenshot01.PNG"}
              projectThumbnailAlt={"Chicago Boating App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"drinkUpp"}
              projectSubtitle={"Search for Drinks Based on Ingredient"}
              codeUrl={"https://github.com/markdrecoll/drinkUpp"}
              deployedLink={"https://markdrecoll.github.io/drinkUpp/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/drinkUpp_screenshot.PNG"}
              projectThumbnailAlt={"drinkUpp App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Google Book Search"}
              projectSubtitle={"Search for and save books from Google Books API."}
              codeUrl={"https://github.com/markdrecoll/googlebooksearch"}
              deployedLink={"https://marksgooglebooksearch.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/googleBookSearch_screenshot01.PNG"}
              projectThumbnailAlt={"Google Book Search App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"User Directory"}
              projectSubtitle={"Search and Filter Users"}
              codeUrl={"https://github.com/markdrecoll/userdirectory"}
              deployedLink={"https://markdrecoll.github.io/userdirectory/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/user_directory_screenshot.PNG"}
              projectThumbnailAlt={"User Directory App"}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Expense Tracker"}
              projectSubtitle={"Track and display expenses via chart.js."}
              codeUrl={"https://github.com/levickane/expensetracker7000"}
              deployedLink={"https://expense-tracker-7000.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/expenseTracker7000_screenshot01.png"}
              projectThumbnailAlt={"Expense Tracker 7000 App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Budget Tracker"}
              projectSubtitle={"Manage a Budget Database"}
              codeUrl={"https://github.com/markdrecoll/progressiveBudgetTracker"}
              deployedLink={"https://damp-everglades-37886.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/budget_tracker_screenshot.PNG"}
              projectThumbnailAlt={"Budget Tracker App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Weather Dashboard"}
              projectSubtitle={"Parse Weather Data"}
              codeUrl={"https://github.com/markdrecoll/Weather_Dashboard"}
              deployedLink={"https://markdrecoll.github.io/Weather_Dashboard/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/weather_dashboard_screenshot.PNG"}
              projectThumbnailAlt={"Weather Dashboard App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Fitness Tracker"}
              projectSubtitle={"Save Workouts to a Database"}
              codeUrl={"https://github.com/markdrecoll/FitnessTracker"}
              deployedLink={"https://damp-cliffs-84726.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/workout_dashboard_screenshot.PNG"}
              projectThumbnailAlt={"Workout Dashboard App"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
