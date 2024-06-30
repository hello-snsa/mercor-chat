import { t } from 'i18next'
import { Link } from 'react-router-dom';

import { SearchPageSS, LoginSS, SearchBarSS } from '../../../assets/images';

export default function HomepageContainer() {
  return (
    <div className="homepage_body">
      <div className="homepage_topSection">
        <p className="homepage_headingText">
          {t('homepageHeadingText')}
        </p>
        <div className='homepage_subHeading'>
          <p>{t('homepageSubHeadingText')}</p>
          <p>{t('homepageSubHeadingText2')}</p>
        </div>
        <Link to="/ai-search" >
          <button className="login-btn btn-primary">{t('tTryForFree')}</button>
        </Link>
        <div>
          <img className="homepage_homess" src={SearchPageSS} />
        </div>
      </div>
      <div className="homepage_whoUsesSection">
        <p className="homepage_pageTitle">{t('tWhoUsesMarcus')}</p>
        <span className="homepage_subHeading">{t("tBuiltForEveryone")}</span>
        <div className="homepage_whoUsesSkills">
          <span>React</span>
          <span>Java</span>
          <span>PHP</span>
          <span>CSS</span>
          <span>Vloggers</span>
          <span>Marketing</span>
          <span>SEO-Specialist</span>
        </div>
        <Link to="/ai-search" >
          <button className="login-btn btn-primary">{t('tTryForFree')}</button>
        </Link>
      </div>
      <div className="homepage_howWorksSection">
        <div className="homepage_pageTitle">
          <p>{t('tHowItWorks')}</p>
          <span className="homepage_subHeading">{t('tSimpleYetSmart')}</span>
        </div>
        <div className="homepage_howItWorks">
          <div className="homepage_step">
            <p className="homepage_stepTitle">{t('tStep1')}</p>
            <div className='homepage_stepsInstruction'>
              <p>{t('tLogInToYourAccount')}</p>
              <p>{t('step-1-1')}</p>
              <p>{t('step-1-2')}</p>
              <p>{t('step-1-3')}</p>
            </div>
          </div>
          <img className="homepage_screenShot homepage_loginss" src={LoginSS} />
        </div>
        <div className="homepage_howItWorks">
          <div className="homepage_step">
            <p className="homepage_stepTitle">{t('tStep2')}</p>
            <div className='homepage_stepsInstruction'>
              <p>{t('tgoToAiSearchPage')}</p>
              <p>{t('step-2-1')}</p>
              <p>{t('step-2-2')}</p>
              <p>{t('step-2-3')}</p>
            </div>
          </div>
          <img className="homepage_screenShot homepage_searchbar" src={SearchBarSS} />
        </div>
      </div>
    </div>
  )
}
