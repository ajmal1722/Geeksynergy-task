import React from 'react';

const SingleMovies = ({ movie }) => {
    return (
        <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105">
            <div className="relative h-64 overflow-hidden">
                <img 
                    className="w-full h-full object-cover" 
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} 
                    alt={`${movie.Title} Poster`} 
                />
            </div>
            <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800 truncate">
                    {movie.Title}
                </h1>
                <p className="mb-1 text-sm text-gray-600">
                    <span className="font-bold">Released Year:</span> { movie.Year }
                </p>
                <p className="mb-1 text-sm text-gray-600">
                    <span className="font-bold">Type:</span> { movie.Type }
                </p>
                <p className="mb-1 text-sm text-gray-600">
                    <span className="font-bold">Rating:</span> { movie.Rating } / 10
                </p>
            </div>
        </div>
    );
};

export default SingleMovies;