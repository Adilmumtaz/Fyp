import React from 'react'
import Header from "./../../include/header";
import "./../../../assets/css/style.css"
function Test0() {
  return (
    <div className='container-fluid'>
      <Header/>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 level0">
            <div>level 0</div>
            <div>
                <button className='btn btn-success'>Continue later</button>
                {" "}
                <button className='btn btn-danger'>Exit</button>
            </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
        <p>Q: <span>Do you prefer books over movies?</span></p>
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between">
            <div className="form-check">
            <input type="radio" className="form-check-input" name="choice" value="strongly-disagree" id="strongly-disagree" />
            <label className="form-check-label" htmlFor="strongly-disagree">Strongly Disagree</label>
            </div>
            <div className="form-check">
            <input type="radio" className="form-check-input" name="choice" value="disagree" id="disagree" />
            <label className="form-check-label" htmlFor="disagree">Disagree</label>
            </div>
            <div className="form-check">
            <input type="radio" className="form-check-input" name="choice" value="neutral" id="neutral" />
            <label className="form-check-label" htmlFor="neutral">Neutral</label>
            </div>
            <div className="form-check">
            <input type="radio" className="form-check-input" name="choice" value="agree" id="agree" />
            <label className="form-check-label" htmlFor="agree">Agree</label>
            </div>
            <div className="form-check">
            <input type="radio" className="form-check-input" name="choice" value="strongly-agree" id="strongly-agree" />
            <label className="form-check-label" htmlFor="strongly-agree">Strongly Agree</label>
            </div>
        </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
            <button className='btn btn-info'>Back</button>
            {" "}
            <button className='btn btn-danger'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Test0
