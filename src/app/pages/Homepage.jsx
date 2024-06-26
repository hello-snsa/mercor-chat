import { t } from 'i18next'

import '../components/homepage/homepage.css';
import { SearchPage, LoginSS, SearchBarSS } from '../../assets/images';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

export default function Homepage() {

  return (
    <div className='homepage'>
      <div className="homepage-body">
        <div className="homepage-topSection">
          <span className="homepage-headingText">
            {t('homepageHeadingText')}
          </span>
          <span>
            {t('homepageSubHeadingText')}
            <br />
            It uses advanced algorithms to get you your desired results.
          </span>
          <Link to="/ai-search" >
            <button className="try-for-free-btn btn-primary">Try for free</button>
          </Link>
          <div>

            <img className="Ai-search page screenshot" src={SearchPage} style={{ width: "60%", border: "1px solid white", borderRadius: "20px" }} />

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
              <span>{t('step-1-1')}</span>
              <span>{t('step-1-2')}</span>
              <span>{t('step-1-3')}</span>
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
              <span>{t('step-2-1')}</span>
              <span>{t('step-2-2')}</span>
              <span>{t('step-2-3')}</span>
            </div>

            <img className="form-image img-searchbar" src={SearchBarSS} />
          </div>


        </div>
        <div className="bottom-section"></div>
      </div>
      <Footer />
    </div>
  )
}
