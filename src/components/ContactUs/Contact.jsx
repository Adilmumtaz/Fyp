import React from 'react'
import Header from "./../include/header";
import Footer from "./../include/footer";
function Contact() {
  return (
    <div className='container-fluid'>
      <Header/>
      <div className="container content mb-5">
        <h4>We Believe In</h4>
        <p className='text-justify'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum laborum quis est reiciendis beatae fugiat vel aspernatur ab necessitatibus veniam quibusdam, repellat accusantium modi. Eveniet perferendis provident labore voluptatibus?"</p>
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
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
