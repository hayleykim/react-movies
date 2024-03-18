import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies }) {
    return (
        <>
            {movies.map((movie, index) => (
                <div key={index}>
                    <MovieCard movie={movie} index={index} />
                </div>
            ))}
        </>
    );
};