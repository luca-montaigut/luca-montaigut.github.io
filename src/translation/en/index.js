import home from "./home.json";
import about from "./about.json";
import works from "./works.json";
import studycases from "./studycases.json";
import error from "./error.json";
import url from "./url.json";

const en = {
  ...error,
  ...home,
  ...about,
  ...works,
  ...studycases,
  ...url,
};

export default en;
