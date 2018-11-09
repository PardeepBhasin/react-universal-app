import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Pages/Home';
import About from './containers/Pages/About';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
