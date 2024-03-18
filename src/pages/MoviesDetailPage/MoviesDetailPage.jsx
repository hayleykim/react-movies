import { useParams } from "react-router-dom";

export default function MoviesDetailPage({ movies }) {
    let { title } = useParams();

    const movie = movies.find((movie) => movie.title === title);

    return (
        <>
        <hr />
            <h1>{movie.title}</h1>
            <div>Release Date: {movie.releaseDate}</div>
            <div>
                <img src={movie.posterPath} alt="image of movie poster" />
            </div>
            <h2>Cast:</h2>
            <ul>
                {movie.cast.map((list, index) => <li key={index}> {list} </li>)}
            </ul>
            
        </>
    );
};