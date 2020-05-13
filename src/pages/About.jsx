import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div>
      <h1>
        <FormattedMessage id="about.title" />
      </h1>
      <p>
        <FormattedMessage id="about.paragraph" />
      </p>
    </div>
  );
};

export default About;
