import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  fetchData = (str, type) => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type === "all" ? "" : `&type=${type}`
      }`
    ).then((response) =>
      response
        .json()
        .then((data) => this.setState({ movies: data.Search, loading: false }))
        .catch((err) => {
          console.log(err);
          this.setState({ loading: false });
        })
    );
  };
  componentDidMount() {
    this.fetchData("matrix", "all");
  }

  setSearch = (str, type) => {
    this.setState({ loading: true });
    this.fetchData(str, type);
  };
  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search cb={this.setSearch} />
        {!loading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
