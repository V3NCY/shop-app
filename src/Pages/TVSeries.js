import React, { Component } from "react";
import SeriesList from "../TVSeries/components/SeriesList";
import Loader from "../TVSeries/components/Loader";
import Intro from "../TVSeries/components/Intro";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false,
  };

  componentDidMount() {}

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ series: json, isFetching: false });
      });
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div className="container">
        <header>
          <h1>TV Series </h1>
        </header>
        <div className="row">
          <div className="col">
            <Intro message="All TV Series" />
            <input
              value={seriesName}
              type="text"
              onChange={this.onSeriesInputChange}
            />
          </div>
        </div>
        <div className="col">
          {!isFetching && series.length === 0 && seriesName.trim() === "" && (
            <p>Please enter a name...</p>
          )}
          {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
            <p>No TV Series have been found!</p>
          )}
          {isFetching && <Loader />}
          {!isFetching && <SeriesList list={this.state.series} />}
        </div>
      </div>
      
    );
  }
}

export default Series;
