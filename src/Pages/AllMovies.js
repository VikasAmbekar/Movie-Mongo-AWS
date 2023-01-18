import { Component } from "react";
import MovieList from "../components/MovieList";

class AllMovies extends Component {
  state = {
    allMovies: [],
  };

  baseURL = "http://ec2-54-175-12-247.compute-1.amazonaws.com:8200/movies";

  async componentDidMount() {
    const response = await fetch(this.baseURL);
    const body = await response.json();
    this.setState({ allMovies: body });
  }

  render() {
    const { allMovies } = this.state;
    return (
      <div>
        {" "}
        All Movies page
        <MovieList movies={allMovies} />
      </div>
    );
  }
}
export default AllMovies;
