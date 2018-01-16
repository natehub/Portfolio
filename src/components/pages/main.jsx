import React from 'react'
import img1 from  './scenarioPortReview.png';
import img2 from  './scenarioPortReview.png';
import img3 from  './scenarioPortReview.png';
import img4 from  './scenarioPortReview.png';
const main = () => (
  <div>
    <div className="pure-u-1">
      <div className="main-text_box-1">Colleen Lauko is a UX designer with 7+ years experience from D.C. driven to simplify and improve the quality of life for those with disabilities and health conditions.</div>
      <div className="main-text_box-2">Below are examples of her personal and publications while working for the US Federal government.</div>
    </div>
    <div className="square">
      <div className="main_pad pure-u-sm-1-1 pure-u-md-1-2">
          <img className="main-img" src={img1} />
      </div>
      <div className="main_pad pure-u-sm-1-1 pure-u-md-1-2">
        <img className="main-img" src={img2} />
      </div>
      <div className="main_pad pure-u-sm-1-1 pure-u-md-1-2">
        <img className="main-img" src={img3} />
      </div>
      <div className="main_pad pure-u-sm-1-1 pure-u-md-1-2">
        <img className="main-img" src={img4} />
      </div>
    </div>
  </div>
   
  )


  export default main