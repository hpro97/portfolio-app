// subsection personal bio
import SubsectionAboutMe from '../components/SubsectionAboutMe';
import SubsectionWebDevJourney from '../components/SubsectionWebDevJourney';
import SubsectionSkills from '../components/SubsectionSkills';
import SubsectionLearning from '../components/SubsectionLearning';
import SubsectionTestimonials from '../components/SubsectionTestimonials';
import SubsectionCV from '../components/SubsectionCV';

import '../styles/PersonalBio.css';

function PersonalBio() {
   return (
      <section className="PersonalBio">
         <SubsectionAboutMe />
         <SubsectionWebDevJourney />
         <SubsectionSkills />
         <SubsectionLearning />
         <SubsectionTestimonials />
         <SubsectionCV />  
      </section>
   );
}

export default PersonalBio