import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { IntlProvider } from "react-intl";
import messagesFr from "./translation/fr";
import messagesEn from "./translation/en";

import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLanguage(localStorage.getItem("lang"));
    }
  }, []);

  const changeLanguage = (e) => {
    if (language === "fr") {
      setLanguage("en");
      localStorage.setItem("lang", "en");
    } else {
      setLanguage("fr");
      localStorage.setItem("lang", "fr");
    }
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <div>
          <Navbar language={language} changeLanguage={changeLanguage} />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"}>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </div>
      </Router>
    </IntlProvider>
  );
};

export default App;
