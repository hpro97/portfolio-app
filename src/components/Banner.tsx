// subsection banner
import SubsectionRole from '../components/SubsectionRole';
import SubsectionHeadline from '../components/SubsectionHeadline';
import SubsectionCartoonBanner from '../components/SubsectionCartoonBanner';

import '../styles/Banner.css';

function Banner() {
   return (
      <section className="Banner">
         <SubsectionRole />
         <SubsectionHeadline />
         <SubsectionCartoonBanner />
      </section>
   );
}

export default Banner