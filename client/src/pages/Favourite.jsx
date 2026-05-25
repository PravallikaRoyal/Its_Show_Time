import React from "react";
import MovieCard from "../components/MovieCard";
import BlurRedCircle from "../components/BlurRedCircle";
import { useAppContext } from "../../context/AppContext";

const Favourite = () =>{
    const {favoriteMovies} = useAppContext()
    return favoriteMovies.length > 0 ? (
        <div className='relative my-40 mb-60 px-6 md:px-16 
        lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
            <BlurRedCircle top="150px" left="0px"/>
            <BlurRedCircle buttom="50px" right="50px"/>
            <h1 className="text-lg font-medium my-4">Your Favourite Movies</h1>
            <div className=" flex flex-wrap max-sm:justify-center gap-8">
                {favoriteMovies.map((movie)=>(
                    <MovieCard movie={movie} key = {movie._id}/>
                )
                )}
            </div>
            
        </div>
    ) : (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-red-500 text-2xl font-bold">
            No movies available
        </h1>
</div>
    )
}
export default Favourite;