import React from "react";

import Footer from "./Footer";
import Header from "./Header";


const Gallery = () => {
    return (

        <>
            <Header />
            <div class="container bg mt-5">

                <h1 class="text-center mt-5fw-bold" style={{color:'#000',fontSize:70}}>Gallery</h1>
                <div class="gallery-image">
                    <div class="img-box">
                        <img src="https://picsum.photos/350/250?image=444" alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                                <p>Library</p>
                                <p class="opacity-low">Architect Design</p>
                            </div>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="https://picsum.photos/350/250/?image=232" alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                                <p>Night Sky</p>
                                <p class="opacity-low">Cinematic</p>
                            </div>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="https://picsum.photos/350/250/?image=431" alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                                <p>Tea Talk</p>
                                <p class="opacity-low">Composite</p>
                            </div>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="https://picsum.photos/350/250?image=474" alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                                <p>Road</p>
                                <p class="opacity-low">Landscape</p>
                            </div>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="https://picsum.photos/350/250?image=344" alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                                <p>Sea</p>
                                <p class="opacity-low">Cityscape</p>
                            </div>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="https://picsum.photos/350/250?image=494" alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                                <p>Vintage</p>
                                <p class="opacity-low">Cinematic</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </>



    )
}

export default Gallery