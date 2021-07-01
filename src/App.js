import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid p-4">
        <div className="row mb-4">
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Chicago Boating App"}
              projectDescription={"Create itineraries for Chicago boat attractions."}
              codeUrl={"https://github.com/markdrecoll/chicagoboatingapp"}
              deployedLink={"https://chicagoboatingapp.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/cba_thumbnail01.png"}
              projectThumbnailAlt={"Chicago Boating App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"drinkUpp"}
              projectDescription={"Search for different cocktails based on ingredients"}
              codeUrl={"https://github.com/markdrecoll/drinkUpp"}
              deployedLink={"https://markdrecoll.github.io/drinkUpp/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/drinkupp_thumbnail01.png"}
              projectThumbnailAlt={"drinkUpp App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Google Book Search"}
              projectDescription={"Search for and save books from the Google Books API."}
              codeUrl={"https://github.com/markdrecoll/googlebooksearch"}
              deployedLink={"https://marksgooglebooksearch.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/booksearch_thumbnail01.png"}
              projectThumbnailAlt={"Google Book Search App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"User Directory"}
              projectDescription={"Search and filter users based on specifications."}
              codeUrl={"https://github.com/markdrecoll/userdirectory"}
              deployedLink={"https://markdrecoll.github.io/userdirectory/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/userdirectory_thumbnail01.png"}
              projectThumbnailAlt={"User Directory App"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Expense Tracker"}
              projectDescription={"Track and display user expenses using chart.js."}
              codeUrl={"https://github.com/levickane/expensetracker7000"}
              deployedLink={"https://expense-tracker-7000.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/expensetracker_thumbnail01.png"}
              projectThumbnailAlt={"Expense Tracker 7000 App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Budget Tracker"}
              projectDescription={"Track profits and losses with a budget database."}
              codeUrl={"https://github.com/markdrecoll/progressiveBudgetTracker"}
              deployedLink={"https://damp-everglades-37886.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/budgettracker_thumbnail01.png"}
              projectThumbnailAlt={"Budget Tracker App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Weather Dashboard"}
              projectDescription={"View a five day weather forecast for a chosen city."}
              codeUrl={"https://github.com/markdrecoll/Weather_Dashboard"}
              deployedLink={"https://markdrecoll.github.io/Weather_Dashboard/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/weatherdashboard_thumbnail01.png"}
              projectThumbnailAlt={"Weather Dashboard App"}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Project
              projectTitle={"Fitness Tracker"}
              projectDescription={"Record different kinds of workouts and track progress."}
              codeUrl={"https://github.com/markdrecoll/FitnessTracker"}
              deployedLink={"https://damp-cliffs-84726.herokuapp.com/"}
              projectThumbnail={process.env.PUBLIC_URL + "/assets/images/fitnesstracker_thumbnail01.png"}
              projectThumbnailAlt={"Fitness Tracker App"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
