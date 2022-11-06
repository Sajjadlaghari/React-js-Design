import React from "react";

import { Link } from 'react-router-dom'
import Footer from "./Footer";
import Header from "./Header";


const About = () => {
    return (
        <>
            <Header />


            <header class="masthead">
                <p class="masthead-intro">About US</p>
                <h1 class="masthead-heading">Welecome to Our IT Solution!</h1>
            </header>
            <section class="mt-5">
             <div class="container">
             <h1>Introduction</h1>
                <p>I love the web and all the awesome new technologies. I'm excited to learn a new things that make the web more beautiful, functional, and perfect.</p>

                <p>I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!</p>
    
            </div>  
            </section>
            <section class="mt-4">
            <div class="container">
                <h1>Where We From</h1>
                <p> I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community! </p>
             </div>
            </section>
                  

    
 

            <div class="container-fluid text-center">
                <h2>SERVICES</h2>
                <h4>What we offer</h4>
                <br />
                <div class="row">
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-off"></span>
                        <h4>POWER</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-heart"></span>
                        <h4>LOVE</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-lock"></span>
                        <h4>JOB DONE</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
                <br /><br />
                <div class="row">
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-leaf"></span>
                        <h4>GREEN</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-certificate"></span>
                        <h4>CERTIFIED</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div class="col-sm-4">
                        <span class="glyphicon glyphicon-wrench"></span>
                        <h4 style={{ color: "#303030;" }}>HARD WORK</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
            </div>

            
            <div class="jumbotron text-center">
                <h1>Company</h1>
                <p>We specialize in blablabla</p>
                <form class="form-inline">
                    <div class="input-group">
                        <input type="email" class="form-control" size="50" placeholder="Email Address" required />
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-danger">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>


          
                    <Footer />

                </>

                )
}

                export default About;