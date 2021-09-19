import React from "react";
 
const MovieHero=()=>{
    return(
        <>
        <div className="md:hidden" /*style={{height:"calc(180vw)"}}*/>
            <img 
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            />
        </div>

        <div className="hidden md:block lg:hidden">
        <img 
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            />
        </div>

        <div className=" relative hidden lg:block" style={{height:"30rem"}}>
        <div className="absolute w-full h-full z-10 "
        style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
        />

        <div className="absolute z-30 w-64 h-96 left-24 top-12">
            <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            className="w-full h-full rounded-xl"
            />
        </div>

        <img 
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            className="w-full h-full"
            />
        </div>

        </>

    )
};


export default MovieHero;
