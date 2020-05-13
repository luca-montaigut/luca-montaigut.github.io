import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Worksbar from "./components/Worksbar";
import StudyCase from "./components/StudyCase/StudyCase";

const Works = () => {
  let { path } = useRouteMatch();
  console.log(path);

  return (
    <div>
      <div>
        <h1>
          <FormattedMessage id="works.title" />
        </h1>
        <p>
          <FormattedMessage id="works.paragraph" />
        </p>
      </div>
      <Worksbar />
      <Switch>
        <Route path={`${path}/:studyCaseId`}>
          <StudyCase />
        </Route>
      </Switch>
    </div>
  );
};

export default Works;
