import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Index from './components/layout/Index'
import Navbar from './components/layout/Navbar'
import Lyrics from './components/trucks/Lyrics'
import {Provider} from './context'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="contaienr">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />

          </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
