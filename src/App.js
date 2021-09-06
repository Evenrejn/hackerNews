import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import NewsPageContainer from "./components/News/NewsPage/NewsPageContainer";
import TargetNewsContainer from "./components/News/NewsPage/TargetNewsContainer";
import CommentsContainer from "./components/News/NewsPage/CommentsContainer";
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path='/' 
      render={ () => <><Navigation /><NewsPageContainer /></>  } />
      <Route path='/:id' 
      render={ (props) => <TargetNewsContainer props={props}/>  } />

      {/* <Route path='/:id' 
      render={ () => <NewsPageContainer /> } /> */}

      {/* <Route path="/" exact <Navigation /> />
      <Route path="/:id" component={Story} /> */}
    </div>
  );
}

export default App;

