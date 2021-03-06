import React, { useEffect } from "react";
import SelectYear from "./SelectYear";
import SelectGenres from "./SelectGenres";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions";

const Filters = (props) => {
  const selectedYear = useSelector(
    (state) => state.selectedFilters.selectedYear
  );
  const selectedGenres = useSelector(
    (state) => state.selectedFilters.selectedGenres
  );

  const dispatch = useDispatch();

  const loadMovies = () => {
    dispatch(
      getMovies({
        year: selectedYear,
        page: 1,
        with_genres: selectedGenres.toString(),
      })
    );
  };

  useEffect(() => {
    loadMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <SelectYear />
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <SelectGenres />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button color="danger" onClick={loadMovies}>
            Find
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filters;
