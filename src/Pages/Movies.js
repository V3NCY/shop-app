import MovieGridItem from "../movie/MovieGridItem";
import MovieListItem from "../movie/MovieListItem";
import Filters from "../moviefilters/Filters";
import { useSelector, useDispatch } from "react-redux";
import { Button, Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";
import { setListView } from "../redux/actions";

function Movies(props) {
  const movies = useSelector((state) => state.movies);
  const isListView = useSelector((state) => state.listView);

  const dispatch = useDispatch();

  const getMovies = () => {
    if (!movies.length) {
      return (
        <div className="col">
          <Alert color="" className="text-center p-5 mt-3">
            Can't find any movies... Try again
          </Alert>
        </div>
      );
    }

    if (isListView) {
      const movieList = movies.map((movie) => {
        return (
          <MovieListItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
          />
        );
      });
      return movieList;
    }

    const movieGridList = movies.map((movie) => {
      return (
        <MovieGridItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
        />
      );
    });
    return movieGridList;
  };

  const toggleListView = () => {
    dispatch(setListView(!isListView));
  };
  const getListIcon = () => {
    if (isListView) {
      return faList;
    }
    return faTh;
  };
  return (
    <>
      <h1>Movies</h1>
      <div className="container">
        <Filters />
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-end pb-1">
              <Button color="danger" onClick={toggleListView}>
                <FontAwesomeIcon icon={getListIcon()} />
              </Button>
            </div>
          </div>
        </div>
        <div className="row">{getMovies()}</div>
      </div>
    </>
  );
}
export default Movies;
