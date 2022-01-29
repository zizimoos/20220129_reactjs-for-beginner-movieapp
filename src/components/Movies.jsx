import { Link } from "react-router-dom";

const Movies = ({ movieList }) => {
  return movieList.map((movie) => (
    <div
      key={movie.id}
      style={{
        width: "600px",
        margin: "10px",
        borderRadius: "10px",
        display: "flex",
        color: "#2b2c30",
        backgroundColor: "#c9cbd6",
      }}
    >
      <Link to={`movie/${movie.id}`}>
        <img
          src={movie.medium_cover_image}
          alt={movie.title}
          style={{ height: "300px", padding: "10px" }}
        />
      </Link>

      <div style={{ padding: "10px" }}>
        <h4>{movie.title}</h4>
        <h5>rating : {movie.rating}</h5>
        {movie.genres.slice(0, 2).map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
        <p>{movie.summary.slice(0, 350)}...</p>
      </div>
    </div>
  ));
};
export default Movies;
