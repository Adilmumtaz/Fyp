import React from 'react'
import Header from "./../include/header";
import Footer from "./../include/footer";
function About() {
  return (
    <div className='container-fluid'>
      <Header/>
      <div className="container content text-center">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto ut tempore ipsa possimus repellat quam porro facere praesentium soluta, unde corrupti maiores esse recusandae voluptas numquam expedita molestiae. Libero!</p>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
           <h4>So far</h4>
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
                  <p>Different specterum</p>
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
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
           <h4>Our Team</h4>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body text-center ">
                  <p>Different specterum</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body text-center">
                  <p>Different specterum</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body text-center">
                  <p>Different specterum</p>
                </div>
              </div>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
