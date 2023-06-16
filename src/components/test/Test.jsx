import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import Header from "./../include/header";
import Footer from "./../include/footer";
function Test() {
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const toggleExpand1 = () => {
    setExpanded1(!expanded1);
  };
  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };
  return (
    <div className='container-fluid'>
      <Header/>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <h4>Test level</h4>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <h4 className="text-center border" onClick={toggleExpand1}>
                    Basic
                </h4>
                {expanded1 && (
                   <>
                    <NavLink to="/level0"><button className='btn btn-block'>level 0</button></NavLink>
                   </>
                )}
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
                <h4 className="text-center border" onClick={toggleExpand}>
                    Medium
                </h4>
                {expanded && (
                   <>
                   <div>
                    <button className='btn btn-block'>level 1</button>
                   </div>
                    <div>
                     <button className='btn btn-block'>level 2</button>
                    </div>
                    
                   </>
                )}
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
                <h4 className="text-center border" onClick={toggleExpand2}>
                    Advance
                </h4>
                {expanded2 && (
                   <>
                   <div>
                    <button className='btn btn-block'>level 3</button>
                   </div>
                    <div>
                     <button className='btn btn-block'>level 4</button>
                    </div>
                   </>
                )}
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Test
