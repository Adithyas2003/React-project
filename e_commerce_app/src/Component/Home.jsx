
// import React from 'react';



// function Home() {
//     return (
//         <div id="demo" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-indicators">
//                 <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img src="./Untitled.jpeg" alt="Description of Image 1" className="d-block w-100" />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="./Untitled1.jpeg" alt="Description of Image 2" className="d-block w-100" />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="./Untitled2.jpeg" alt="Description of Image 3" className="d-block w-100" />
//                 </div>
//             </div>

//             <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>

//             <div className="container-fluid mt-3">
              
//             </div>
//         </div>
//     );
// }

// export default Home;

import React,{useState,useEffect} from "react";
import axios from 'axios'
const Home=()=>{
    const [Product,setProduct]=useState([])
    const [add,setAdd]=useState(false)
    const [currentProduct,setCurrentProduct]=useState(null)
    useEffect(()=>{
        axios.get('')
        .then(response=>setProduct(response.data))
        .catch(error => console.log(error))
    },[])
    const view_p=(Products)=>{
        setAdd(true);
        setCurrentProduct(Products);
    }
    return(
        
     










        <div className="container mt-3">
            <div className="row" id="a1">
                {Product.map(pro=>(
                    <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
                        <div className="card" onClick={()=>view_p(pro)}>
                            <img className="card-img-top img-fluid" src={pro.image} alt="product image"/>
                            <div className="card-body">
                                <h4 className="card-title">{pro.p_name}</h4>
                                <h6 className="card-text">${pro.price}</h6>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
