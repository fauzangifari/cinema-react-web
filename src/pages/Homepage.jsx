import React from 'react'
import Navbar from '../components/Navbar'
import { getMovieList } from '../api'
import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

    const [movieList, setMovieList] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMovieList()
            setMovieList(result)
        }
        fetchData()
    }, [])

  return (
    <div className=''>
        <Navbar />
        <div className='flex flex-col flex-1'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
            >
                {
                    movieList.map((movie, index) => (
                        <div key={index} className="relative w-full h-screen">
                            <img
                                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-6">
                                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                                <p className="text-lg font-light">{movie.overview}</p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    </div>
  )
}

export default Home