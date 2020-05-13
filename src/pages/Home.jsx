import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <div>
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
      <p>
        <FormattedMessage id="home.paragraph" />
      </p>
    </div>
  );
};

export default Home;
