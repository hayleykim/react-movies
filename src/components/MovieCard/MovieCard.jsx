import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return(
        <Link to={`/movies/${movie.title}`}>
            <div style={{ backgroundImage: `url(${movie.posterPath})`}}>
                <h2>Title: {movie.title}</h2>
                <div>Release Date: {movie.releaseDate}</div>
            </div>
        </Link>
    );
};