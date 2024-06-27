import '../components/homepage/homepage.css';

import Footer from '../layouts/Footer';
import HomepageContainer from '../components/homepage/HomepageContainer';

export default function Homepage() {

  return (
    <div className='homepage'>
      <HomepageContainer />
      <Footer />
    </div>
  )
}
