<<<<<<< HEAD
import { FC } from 'react';
import './Skills.css';

const Skills: FC = () => {
  const skills = [
    { name: 'HTML5', icon: '/assets/img/logos/icons8-html5.png' },
    { name: 'JavaScript', icon: '/assets/img/logos/icons8-javascript.png' },
    { name: 'Python', icon: '/assets/img/logos/icons8-python.png' },
    { name: 'CSS', icon: '/assets/img/logos/icons8-css3.png' },
    { name: 'NodeJS', icon: '/assets/img/logos/icons8-nodejs.png' },
    { name: 'PHP', icon: '/assets/img/logos/icons8-php.png' },
    { name: 'PSeInt', icon: '/assets/img/logos/icons-PSeInt.png' },
    { name: 'React', icon: '/assets/img/logos/icons8-react.png' }
  ];

  return (
    <section className="skills container" id="skills" data-aos="fade-up" data-aos-duration="800">
      <h1 className="skills__title" data-aos="fade-down" data-aos-delay="100">Skills</h1>
      <div className="skills__card">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="skill" 
            data-aos="flip-left" 
            data-aos-delay={200 + (index * 100)} 
            data-aos-duration="1000"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill__img" />
            <h4 className="skill__text">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
=======
import { FC } from 'react';
import './Skills.css';

const Skills: FC = () => {
  const skills = [
    { name: 'HTML5', icon: '/assets/img/logos/icons8-html5.png' },
    { name: 'JavaScript', icon: '/assets/img/logos/icons8-javascript.png' },
    { name: 'Python', icon: '/assets/img/logos/icons8-python.png' },
    { name: 'CSS', icon: '/assets/img/logos/icons8-css3.png' },
    { name: 'NodeJS', icon: '/assets/img/logos/icons8-nodejs.png' },
    { name: 'PHP', icon: '/assets/img/logos/icons8-php.png' },
    { name: 'PSeInt', icon: '/assets/img/logos/icons-PSeInt.png' },
    { name: 'React', icon: '/assets/img/logos/icons8-react.png' }
  ];

  return (
    <section className="skills container" id="skills" data-aos="fade-up" data-aos-duration="800">
      <h1 className="skills__title" data-aos="fade-down" data-aos-delay="100">Skills</h1>
      <div className="skills__card">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="skill" 
            data-aos="flip-left" 
            data-aos-delay={200 + (index * 100)} 
            data-aos-duration="1000"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill__img" />
            <h4 className="skill__text">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
>>>>>>> 235c25cbf8e633a36f3a91748dbe6580f1c216c5
