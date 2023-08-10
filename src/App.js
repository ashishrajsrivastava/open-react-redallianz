// eslint-disable-next-line
import React, { useRef, useEffect , useState} from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import dotenv from 'dotenv'; // Import dotenv
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Call config to load the environment variables
dotenv.config();

console.log('API Key:', process.env.REACT_APP_MAILCHIMP_API_KEY);
console.log('List ID:', process.env.REACT_APP_MAILCHIMP_LIST_ID);
//import ReactGA from 'react-ga';



// Initialize Google Analytics
/* ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
}; */

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    //const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    //trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;