import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const parmas = useParams();

  useEffect(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${parmas.id}`
    );
    const json = await response.json();
    setMovieDetail(json.data.movie);
  }, []);
  return (
    <div
      style={{
        width: "400px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Detail for {movieDetail.title}</h3>
      <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
      <p>{movieDetail.description_full}</p>
    </div>
  );
};
export default Detail;
