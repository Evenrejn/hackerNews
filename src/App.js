import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import NewsPageContainer from "./components/News/NewsPage/NewsPageContainer";
import TargetNewsContainer from "./components/News/NewsPage/TargetNewsContainer";
import CommentsContainer from "./components/News/NewsPage/CommentsContainer";
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' 
      render={ () => <NewsPageContainer /> } />
      <Route path='/:id' 
      render={ (props) => 
      <>
        <TargetNewsContainer props={props} />
        <CommentsContainer props={props}/>
      </> 
    }/>
    </div>
  );
}

export default App;