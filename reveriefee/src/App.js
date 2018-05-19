import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Welcome from './components/Welcome'
import Robot from './components/Robot'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Route exact path='/hosts' component={Welcome}/>
            <Route path='/hosts/:id' component={Robot}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
