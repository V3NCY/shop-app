import React, { Component } from "react";
import Intro from "../Serie/components/Intro";
import SeriesList from "../Serie/components/SeriesList";
import Loader from "../Serie/components/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false,
  };

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value, isFetching: false });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <Intro message="Your favorite TV Series are here!!!" />
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please enter a name...</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV Series have been found...</p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
