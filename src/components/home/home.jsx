import React from 'react'
import Header from "./../include/header";
import Footer from "./../include/footer";
import "./../../assets/css/style.css";
import { Carousel } from 'react-bootstrap';
function Home() {
  return (
    <div class="container-fluid">
      <Header/>
      <div className="container content">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <p>para</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            image
          </div>
        </div>
        <div className="row mt-5">
          <div className="card card-set">
            <div className="card-title text-center mt-2">
              <p className='card-header-title'>Reach us out</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div class="form-group">
                    <label for="usr">Mail:</label>
                      <input type="email" class="form-control" name='mail' placeholder='Enter your email'/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="form-group">
                    <label for="usr">Name:</label>
                      <input type="name" class="form-control" name='name' placeholder='Enter your name'/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div class="form-group">
                    <label for="usr">Message:</label>
                      <textarea name="message" id="" cols="30" rows="10" className='form-control'></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <button className='btn btn-success'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 mb-4">
            <p className='text-center'>question here</p>
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <p className='text-center'>para here</p>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="div card-body text-center">
                  <p>Accurate</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="div card-body text-center">
                  <p>Different specterum</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="div card-body text-center">
                  <p>Trust-worthy Process</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="div card-body text-center">
                  <p>Well Researced</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="div card-body text-center">
                  <p>Detailed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="div card-body text-center">
                  <p>Advance technology</p>
                </div>
              </div>
            </div>
        </div>
         <div className="row mt-5 mb-5">
         <div className="col-lg-12">
          <Carousel controls={false}>
            <Carousel.Item>
              <div className="col-lg-12 text-center w-100">
                <div className="card">
                  <div className="card-body">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      imag
                    </div>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <h3>title</h3>
                    <p>abc</p>
                  </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-lg-12 text-center w-100">
                <div className="card">
                  <div className="card-body">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      imag2
                    </div>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <h3>title</h3>
                    <p>abc</p>
                  </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-lg-12 text-center w-100">
                <div className="card">
                  <div className="card-body">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      imag3
                    </div>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <h3>title</h3>
                    <p>abc</p>
                  </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
         </div>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
