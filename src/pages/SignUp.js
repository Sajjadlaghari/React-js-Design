import React from "react";
import { Link } from 'react-router-dom'
import Header from "./Header";

const SignUp = () => {
  return (
    <>
      <Header />

      <section class="background-radial-gradient overflow-hidden" style={{ width: '100%', height: '100vh' }}>


        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0" >
              <h1 class="my-5 display-5 fw-bold ls-tight" style={{ color: 'white' }}>
                The best offer <br />
                <span >for your business</span>
              </h1>
              <p class="mb-4 opacity-70" style={{ color: '#fff' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

              <div class="card bg-glass">
                <div class="card-body px-4 py-5 px-md-5">
                  <h3 class="text-center mt-3 mb-5">Registration Form</h3>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" />
                          <label class="form-label" for="form3Example1">First name</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example2" class="form-control" />
                          <label class="form-label" for="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control" />
                      <label class="form-label" for="form3Example3">Email address</label>
                    </div>
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4" class="form-control" />
                      <label class="form-label" for="form3Example4">Password</label>
                    </div>


                    <h3 class="text-center">
                      <button type="submit" class="btn btn-primary btn-block mb-4">
                        Sign up
                      </button>

                    </h3>
                    &nbsp; &nbsp; &nbsp;

                    <p class="text-center">
                      <span>  ALready have account </span> <Link to="login" style={{ textDecoration: 'none' }}> Click Here</Link>

                    </p>
                    <div class="text-center">
                      <p>or sign up with:</p>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                      </button>

                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                      </button>

                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}


export default SignUp