import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => (
  <li>
    <Link to={`/tvseries/${series.show.id}`}>{series.show.name}</Link>
  </li>
);

const SeriesList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="series-list">
            {props.list.map((series) => (
              <SeriesListItem series={series} key={series.show.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeriesList;
