import Home from "./Pages/Home";
import Products from "./Pages/Products";
import MainLayout from "./layouts/Default";
import HomeLayout from "./layouts/Home";
import Contacts from "./Pages/Contacts";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import Orders from "./Pages/Orders";
import TVSeries from "./Pages/TVSeries";
import Series from "./Pages/TVSeries";
import SingleSeries from "./TVSeries/containers/singleSeries";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tickets from "./Pages/Tickets";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <HomeLayout>
        <Home></Home>
      </HomeLayout>
    ),
  },
  {
    path: "/movies",
    exact: true,
    main: () => (
      <MainLayout>
        <Movies></Movies>
      </MainLayout>
    ),
  },
  {
    path: "/tvseries",
    main: () => (
      <MainLayout>
        <TVSeries></TVSeries>
      </MainLayout>
    ),
  },
  {
    path: "/movie/:id",
    main: () => (
      <MainLayout>
        <MovieDetails></MovieDetails>
      </MainLayout>
    ),
  },
  {
    path: "/products",
    main: () => (
      <MainLayout>
        <Products></Products>
      </MainLayout>
    ),
  },
  {
    path: "/tickets",
    main: () => (
      <MainLayout>
        <Tickets></Tickets>
      </MainLayout>
    ),
  },
  {
    path: "/orders",
    main: () => (
      <MainLayout>
        <Orders></Orders>
      </MainLayout>
    ),
  },
  {
    path: "/contacts",
    main: () => (
      <MainLayout>
        <Contacts></Contacts>
      </MainLayout>
    ),
  },
];

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return (
      <Route key={index} exact={route.exact} path={route.path}>
        {route.main}
      </Route>
    );
  });
  return routeComponents;
};

function App() {
  return (
    <Router>
      <Switch>{getRoutes()}</Switch>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Series} />
          <Route path="/tvseries/:id" component={SingleSeries} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
