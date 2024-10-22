import { useEffect, useState } from "react";
import SingleMovies from "../components/reusable/SingleMovies";
import CompanyInfo from "../components/homePageComponents/CompanyInfo";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://www.omdbapi.com/?s=boys&apikey=ad0aeddf');
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                const data = await response.json();
                if (data.Search) {
                    setMovies(data.Search); // Store the fetched movies
                } else {
                    setError('No movies found');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className=''>
            <div className="w-full flex justify-end px-8">
                <CompanyInfo />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="mt-4">
                {movies.length > 0 ? (
                    <ul>
                        {movies.map(movie => (
                            <SingleMovies key={movie.Title} movie={movie} />
                        ))}
                    </ul>
                ) : (
                    <p>No movies available</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;