import React from 'react'
import '../srccss/footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
faFacebook,
faYoutube,
faTwitter

} from '@fortawesome/free-brands-svg-icons'
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'
export default function footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
      <div className='row'>
        <div className='col'>
         <ul className='list-unstyled'>
          <li>Contact Us</li>
          <li>phone: 094573248</li>
          <li>Email: huytran123@gmail.com</li>
         </ul>
      
         </div>

         <div className='col'>
         <h4>GET THE NEWSLETTER</h4>
           <Textfield name='nhantinnhan-email' placeholder='Email' elemAfterInput={
             <Button className='btn-submit'>Submit</Button>
           }></Textfield>
         </div>

         <div className='col'>
         <div className="social-share-inner">
                  
                    <a href='#' className='facebook social'>
                    <FontAwesomeIcon icon={faFacebook} size='2x'/>
                    </a>
                    
                    <a href='#' className='youtube social'>
                    <FontAwesomeIcon icon={faYoutube} size='2x'/>
                    </a>
                    
                    <a href='#' className='twitter social'>
                    <FontAwesomeIcon icon={faTwitter} size='2x'/>
                    </a>
                    
                  
                </div>
         </div>
         <hr/>
      </div>
      <div className='row'>
      <p className='col-sm'>
      &copy;{new Date().getFullYear()} 2Style Barber Shop | Cut Club Saigon. Powered by Webgalaxy
      </p>
      
      </div>
      
      </div>
    
    </div> /*end div main-footer*/
    
    
  )
}
