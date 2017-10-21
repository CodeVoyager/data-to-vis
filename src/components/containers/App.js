import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import BPI from './BPI';
import Grid from '../presentational/Grid';

class App extends Component {
    render () {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={Grid}/>
                    <Route path="/bpi" component={BPI}/>
                </div>
            </Router>
        );
    }
}

export default App;
