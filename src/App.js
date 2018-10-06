import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import Menu from './components/Menu.js'
import Game from './components/Game.js'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Menu} />
          <Route path='/Game' component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App;
