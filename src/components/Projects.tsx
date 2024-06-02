// subsection projects
import SubsectionSentra from '../components/SubsectionSentra';
import SubsectionActiveEdge from '../components/SubsectionActiveEdge';
import SubsectionMaceTattoo from '../components/SubsectionMaceTattoo';

import '../styles/Projects.css';

function Projects() {
   return (
      <section className="Projects">
         <SubsectionSentra />
         <SubsectionActiveEdge />
         <SubsectionMaceTattoo />
      </section>
   );
}

export default Projects