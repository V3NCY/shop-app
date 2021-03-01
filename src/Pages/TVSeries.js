import React, { Component } from "react";
import Intro from "../TvSeries/Intro";
import SeriesList from "../TvSeries/SeriesList";
import Loader from "../TvSeries/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false,
  };

  onSeriesInputChange = (e) => {
    this.setState({
      seriesName: e.target.value,
      isFetching: true,
    });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          series: json,
          isFetching: false,
        });
      });
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div className="container">
        <header className="h1">TV Series</header>

        <div>
          <Intro />
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>

        <div className="col">
          {!isFetching && series.length === 0 && seriesName.trim() === "" && (
            <p>Please enter TV Series...</p>
          )}
          {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
            <p>No TV series have been found... Please, try again!</p>
          )}
          {isFetching && <Loader />}
          {!isFetching && <SeriesList list={this.state.series} />}
        </div>
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-best-tv-shows-6up-02-1513694051.jpg"
          alt="tv"
          width="100%"
          className="my-3"
        ></img>
      </div>
    );
  }
}

export default Series;
