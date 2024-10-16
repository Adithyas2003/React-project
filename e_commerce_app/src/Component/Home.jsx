
// import React from 'react';



function Home() {
    return (
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./Untitled.jpeg" alt="Description of Image 1" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src="./Untitled1.jpeg" alt="Description of Image 2" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src="./Untitled2.jpeg" alt="Description of Image 3" className="d-block w-100" />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <div className="container-fluid mt-3">
              
            </div>
        </div>
    );
}

export default Home;
