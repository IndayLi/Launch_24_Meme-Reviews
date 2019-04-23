import React from 'react';
import { Router, browserHistory, Route} from 'react-router';
import MemesContainer from './MemesContainer'


export const App = (props) => {

  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={MemesContainer}/>
      </Router>
      </div>
  )
}

export default App
