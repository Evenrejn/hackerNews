// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import NewsPage from "./components/News/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <NewsPage />
    </div>
  );
}

export default App;