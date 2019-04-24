import React from 'react';
import { Router, browserHistory, Route} from 'react-router';
import MemesContainer from './MemesContainer'
import ShowContainer from "./ShowContainer";


export const App = (props) => {

  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={MemesContainer}/>
        <Route path='/memes' component={MemesContainer}/>
        <Route path="/memes/:id" component={ShowContainer} />
      </Router>
    </div>
  )
}

export default App
