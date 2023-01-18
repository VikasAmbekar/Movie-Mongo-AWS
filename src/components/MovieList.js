import MovieItem from "./MovieItem";
import classes from "./MovieList.css";

function MovieList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.movies.map((movie) => (
          <MovieItem
            key={movie._id}
            title={movie.title}
            imdb={movie.imdb}
            image={movie.imageUrl}
            description={movie.description}
          />
        ))}
      </ul>
    </div>
  );
}
export default MovieList;
