import "./MovieItem1.css";

function MovieItem(props) {
  return (
    <div className="item">
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>Imdb Ratings: {props.imdb}</p>
      </div>
      <div className="actions button">
        <button> Add To Favourites</button>
      </div>
    </div>
  );
}
export default MovieItem;
