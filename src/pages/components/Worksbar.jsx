import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import works from "./StudyCase/studycases";

const Worksbar = () => {
  let { url } = useRouteMatch();
  return (
    <>
      <ul>
        {works.map(({ id, slug, name }) => (
          <li key={id}>
            <Link to={`${url}/${slug}-study-case`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Worksbar;
