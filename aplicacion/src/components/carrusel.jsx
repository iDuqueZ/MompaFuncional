import React from "react";


function Carrusel (){
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1500">
                    <img src="images/header1.jpg" className="d-block w-100 h-120" alt="Imagen1"></img>
                </div>
                <div className="carousel-item" data-bs-interval="1500">
                    <img src="images/header2.jpg" className="d-block w-100 h-120" alt="Imagen2"></img>
                </div> 
                <div className="carousel-item" data-bs-interval="1500">
                    <img src="images/header3.jpg" className="d-block w-100 h-120" alt="Imagen3"></img>
                </div>
            </div>
            <div className="Titulo">
                <h1>Bienvenido a nuestra tienda virtual</h1>
                <h3>¡Aquí encontraras todos los productos que MOMPA tiene para tí!</h3>
                <div className="button">
                    Ver Productos
                </div>
            </div>
            <div className="trans">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,133 0,133 C 83.22307692307692,139.74871794871797 166.44615384615383,146.4974358974359 237,153 C 307.55384615384617,159.5025641025641 365.4384615384615,165.75897435897434 454,147 C 542.5615384615385,128.24102564102566 661.8,84.46666666666667 757,90 C 852.2,95.53333333333333 923.3615384615384,150.37435897435896 988,151 C 1052.6384615384616,151.62564102564104 1110.7538461538463,98.03589743589744 1185,86 C 1259.2461538461537,73.96410256410256 1349.623076923077,103.48205128205129 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffff88" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,266 0,266 C 72.16666666666669,261.94871794871796 144.33333333333337,257.8974358974359 222,263 C 299.66666666666663,268.1025641025641 382.83333333333326,282.35897435897436 458,273 C 533.1666666666667,263.64102564102564 600.3333333333334,230.66666666666666 690,227 C 779.6666666666666,223.33333333333334 891.8333333333333,248.974358974359 981,267 C 1070.1666666666667,285.025641025641 1136.3333333333333,295.4358974358974 1209,294 C 1281.6666666666667,292.5641025641026 1360.8333333333335,279.28205128205127 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffffff" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>            
            </div>
        </div>
    );
}

export default Carrusel