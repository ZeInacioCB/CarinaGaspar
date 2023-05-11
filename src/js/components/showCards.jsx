import React from "react";


export const ShowCards = ({ images }) => {


    return (
        <div>
            {images.map((image) => (
                <div key={image.url} className="card shadow-lg compact bg-base-100">
                    <figure>
                        <img src={image.url} alt={image.alt} />
                    </figure>
                    <div className="justify-end card-body">
                        <h2 className="card-title">{image.title}</h2>
                        <p>{image.description}</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">More info</button>
                        </div>
                    </div>
                </div>))}            
        </div>
    );
};