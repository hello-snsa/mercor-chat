
import { t } from 'i18next'

import '../components/homepage/homepage.css';
import { Logo, SearchPage, DottedLine, LoginSS, SearchBarSS } from '../../assets/images';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';


export default function Homepage() {

  return (
    <div className='homepage'>
      <div className="homepage-header flex flex-align-center flex-justify-space-between flex-justify-space-between flex-jc-sb" >
        <div className="logo-logo-text">
          <img className="logo-img" src={Logo} />
          <h2>MARCUS</h2>
        </div>

        <div className="header-last-column">
          <button className="login-btn btn-primary">Login</button>
        </div>
      </div>
      <div className="homepage-body">
        <div className="homepage-topSection">
          <span className="homepage-headingText">
            Unlock the Power of AI for Recruiting Best Talent
          </span>
          <span>
            Marcus is an AI-powered tool that helps you find the best talent around the world.
            <br />
            It uses advanced algorithms to get you your desired results.
          </span>
          <Link to="/ai-search" >
            <button className="try-for-free-btn btn-primary">Try for free</button>
          </Link>
          <div>

            <img className="Ai-search page screenshot" src={SearchPage} style={{ width: "60%", border:"1px solid white", borderRadius:"20px" }} />

          </div>
        </div>
        <div className="who-uses-section">
          <a className="font-16 font-weight-600 page-title">WHO USES MARCUS</a>
          <span className="sub-heading">Built For Everyone</span>
          <div className="who-uses-skills">
            <span>React</span>
            <span>Java</span>
            <span>PHP</span>
            <span>CSS</span>
            <span>Vloggers</span>
            <span>Marketing</span>
            <span>SEO-Specialist</span>
          </div>
          <Link to="/ai-search" >
            <button className="try-for-free-btn btn-primary">Try for free</button>
          </Link>
        </div>

        <div className="how-works-section">
          <div className="colum-flex-gap-0">
            <a className="font-16 font-weight-600 page-title">HOW IT WORKS</a>
            <span className="sub-heading">Simple yet smart</span>
          </div>

          <div className="how-it-works">
            <div>
            </div>
            <div className="step-1">
              <span className="font-16 font-weight-600 page-title">STEP 1</span>
              <span className="font-16 font-weight-600">
                Log in To Your Account
              </span>
              <span>Start by logging in to your Mercor </span>
              <span> account, where you'll have access</span>
              <span>to our advanced AI-powered searching tools.</span>
            </div>

            <img className="form-image" src={LoginSS} style={{ width: "40%" }} />
          </div>
          
          <div className="how-it-works">
            
            <div>
              {/* <div className="circle"></div> */}
              {/* <div className="circle-1"></div> */}

              
            </div>
            
            <div className="step-1">
              <span className="font-16 font-weight-600 page-title">STEP 2</span>
              <span className="font-16 font-weight-600">
                Go to AI-Search page
              </span>
              <span>Start typing your query </span>
              <span> For ex. "I need a react developer"</span>
              <span>Top talented developer will be displayed to you.</span>
            </div>

            <img className="form-image" src={SearchBarSS} style={{ width: "40%", height: "100px", border:"10px solid white", borderRadius:"10px"  }} />
          </div>


        </div>
        <div className="bottom-section"></div>
      </div>
      <Footer />
    </div>
  )
}
