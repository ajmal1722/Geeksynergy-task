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
            <div className="w-full flex justify-between items-center shadow-lg">
                <h1 className="lg:ml-16 sm:ml-8 ml-3 text-2xl font-bold font-mono">
                    Geeksynergy
                </h1>
                <CompanyInfo />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="mt-10">
                {movies.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <li key={movie.Title}>
                                <SingleMovies movie={movie} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500 text-lg">No movies available</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;