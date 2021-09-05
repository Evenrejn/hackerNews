import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import NewsPageContainer from "./components/News/NewsPage/NewsPageContainer";
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <NewsPageContainer /> */}
      <Route path='/news/:newsId?' 
      render={ () => <NewsPageContainer /> } />
    </div>
  );
}

export default App;