import React from 'react'

const SingleMovies = ({ movie }) => {
    console.log(movie, ',oovie')
    return (
        <div className='flex '>
            <div>
                {/* <img 
                    src={movie.Poster} alt="" 
                /> */}
            </div>
            <div>
                <h1 className='text-lg'>
                    {movie.Title}
                </h1>
            </div>
        </div>
    )
}

export default SingleMovies
