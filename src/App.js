import "./App.css";
import React, { useState, useEffect } from "react";
import img from '../src/images/img.webp';
import facebook from  '../src/images/facebook.png'
import twitter from  '../src/images/twitter.png'

function App() {
 
  return (
   
     <div class="container text-center ">
  <div class="row ">
    <div class="col-lg-12 ">
     <div className="heading_container">
      <h3>Welcome</h3>
      <p>Pleases login and sign up using our app</p>
     </div>
     <div className="img_container"> 
     <img src={img} className="img_cotnaier_img" alt="img"/>
      </div>
      <div className="social_container">
<p>order via social network</p>
<div className="Social_network_icon">
  
  <button>
  <img src={twitter} className="img_cotnaier_img" alt="facebook"/>
  </button>
  <button>
  <img src={facebook} className="img_cotnaier_img" alt="facebook"/>
  </button>

   </div>
      </div>
<div className="log_with_email_container">
  <p> or login with email</p>
  <button>Sign Up</button>
  <p> Don't have any account? Login</p>
</div>

    </div>
   
  </div>
  
</div>
   
  );
}

export default App;
