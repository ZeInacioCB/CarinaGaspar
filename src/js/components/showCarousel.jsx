import React from "react";


export const ShowCarousel = ({ images }) => {

    const ids = images.map((image) => 'slide' + image.id);

    const nextIndex = (index) => {
        if (index >= ids.length) return 1;
        return index + 1;
    };

    const prevIndex = (index) => { 
        if (index <= 1) return ids.length;
        return index - 1;
    };


    return (
        <div className="carousel w-full">
            {images.map((image, index) => (
                <div key={image.url} id={ids[index]} className="carousel-item relative w-full">
                    <img src={image.url} alt={image.alt} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={'#slide' + prevIndex(index+1)} className="btn btn-circle">❮</a> 
                        <a href={'#slide' + nextIndex(index+1)} className="btn btn-circle">❯</a>
                    </div>
                </div> 
            ))}            
        </div>
    );
};