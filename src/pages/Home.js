import { Link } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <Header />
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_" class="d-block w-100 img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://th.bing.com/th/id/R.d9b974f4d81f0ff180468b8a77531ee8?rik=ROj6PLShufUdcQ&pid=ImgRaw&r=0" style={{ heigh: 200 }} class="d-block w-100 img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://th.bing.com/th/id/R.a36ba3e1ede18e9d7be97e2b97a44f39?rik=4OmgHnnq0p1GBw&pid=ImgRaw&r=0" class="d-block w-100 img" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


                <div class="container mt-5">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <img src="https://th.bing.com/th/id/R.7f52fe24f1cbc8326ee0c11a0bb57a4e?rik=9OzmmEw6acPEEg&pid=ImgRaw&r=0"  style={{height:400}} alt="Jane" />
                                <h2 style={{paddingLeft:10,marginBottom:-6}}>Jane Doe</h2>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>CEO & Founder</p>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p class="title p-2" style={{paddingLeft:10}}>example@example.com</p>
                                    <p class="title "style={{paddingLeft:10}}><button class="button btn btn-success">Contact</button></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="https://th.bing.com/th/id/R.41d6a7b21898dee8d4c8fa27cf28e979?rik=9RBjdjto4Vu6Kg&pid=ImgRaw&r=0"  style={{height:400}} alt="Jane" />
                                <h2 style={{paddingLeft:10,marginBottom:-6}}>Jane Doe</h2>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>CEO & Founder</p>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p class="title p-2" style={{paddingLeft:10}}>example@example.com</p>
                                    <p class="title "style={{paddingLeft:10}}><button class="button btn btn-success">Contact</button></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="https://th.bing.com/th/id/R.a9704b529b8255e3660fdb7509c5da38?rik=7S0PRmTn8Yw1Uw&pid=ImgRaw&r=0" style={{height:400}} alt="Jane" />
                                <h2 style={{paddingLeft:10,marginBottom:-6}}>Jane Doe</h2>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>CEO & Founder</p>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p class="title p-2" style={{paddingLeft:10}}>example@example.com</p>
                                    <p class="title "style={{paddingLeft:10}}><button class="button btn btn-success">Contact</button></p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="row mt-5">
                        <div class="col-md-4">
                            <div class="card">
                                <img src="https://th.bing.com/th/id/R.7f52fe24f1cbc8326ee0c11a0bb57a4e?rik=9OzmmEw6acPEEg&pid=ImgRaw&r=0"  style={{height:400}} alt="Jane" />
                                <h2 style={{paddingLeft:10,marginBottom:-6}}>Jane Doe</h2>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>CEO & Founder</p>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p class="title p-2" style={{paddingLeft:10}}>example@example.com</p>
                                    <p class="title "style={{paddingLeft:10}}><button class="button btn btn-success">Contact</button></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="https://th.bing.com/th/id/R.41d6a7b21898dee8d4c8fa27cf28e979?rik=9RBjdjto4Vu6Kg&pid=ImgRaw&r=0"  style={{height:400}} alt="Jane" />
                                <h2 style={{paddingLeft:10,marginBottom:-6}}>Jane Doe</h2>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>CEO & Founder</p>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p class="title p-2" style={{paddingLeft:10}}>example@example.com</p>
                                    <p class="title "style={{paddingLeft:10}}><button class="button btn btn-success">Contact</button></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="https://th.bing.com/th/id/R.a9704b529b8255e3660fdb7509c5da38?rik=7S0PRmTn8Yw1Uw&pid=ImgRaw&r=0" style={{height:400}} alt="Jane" />
                                    <h2 style={{paddingLeft:10,marginBottom:-6}}>Jane Doe</h2>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>CEO & Founder</p>
                                    <p class="title p-2" style={{paddingLeft:10,marginBottom:-6}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p class="title p-2" style={{paddingLeft:10}}>example@example.com</p>
                                    <p class="title "style={{paddingLeft:10}}><button class="button btn btn-success">Contact</button></p>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <Link />

            </div>

            <Footer />
        </>

    )
}

export default Home