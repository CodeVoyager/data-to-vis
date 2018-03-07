import React, {Component} from 'react'
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../../../store';
import BPI from '../BPI';
import Grid from '../../presentational/Grid';

class App extends Component {
    render () {
        const a = {};
        return (
            <Provider store={store}>
                <Router>
                    <div className="app">
                        <Route exact path="/" component={Grid} some={a} dupa="TEST2"/>
                        <Route path="/bpi" component={BPI}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
