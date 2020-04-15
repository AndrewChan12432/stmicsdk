import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Event from './Pagecomponents/Event';
import Event_cont1 from './Pagecomponents/Event_cont1';
import Event_cont2 from './Pagecomponents/Event_cont2';
import DefaultPage from './Pagecomponents/DefaultPage';
import Pastor from './Pagecomponents/Pastor';
import History from './Pagecomponents/History';
import Location from './Pagecomponents/Location';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ministries from './Pagecomponents/Ministries';
import Window from './Pagecomponents/Window';
import LandingPage from './Pagecomponents/LandingPage';
import ErrorPage from './Pagecomponents/Error'
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <Router>
    <div className="App"> 
       <SimpleReactLightbox>
        <Navbar />
        <Switch>
          <Route exact path="/" component={DefaultPage} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/pastor" component={Pastor} />
          <Route path="/history" component={History} />
          <Route path="/location" component={Location} />
          <Route path="/ministries" component={Ministries} />
          <Route path="/event" component={Event} />
          <Route path="/event2" component={Event_cont1} />
          <Route path="/event3" component={Event_cont2} />
          <Route path="/window" component={Window} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
       </SimpleReactLightbox>
    </div>
    </Router>
  );
}

export default App;
