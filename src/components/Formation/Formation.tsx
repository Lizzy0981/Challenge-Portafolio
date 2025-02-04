import { FC } from 'react';
import './Formation.css';

const Formation: FC = () => {
  const formations = [
    {
      logo: '/assets/img/logos/logo_infotep.png',
      title: 'Programación PHP',
      institution: 'Instituto Nacional de Formación Técnico Profesional (INFOTEP)',
      year: '2020',
      delay: 300
    },
    {
      logo: '/assets/img/logos/logo_capacitateparaelempleo.png',
      title: 'Tester',
      institution: 'Capacítate para el Empleo',
      year: '2021',
      delay: 400
    },
    {
      logo: '/assets/img/logos/logo_academiaQA.png',
      title: 'Testing de Software QA',
      institution: 'Academia QA',
      year: '2021',
      delay: 500
    },
    {
      logo: '/assets/img/logos/udemy_logo.png',
      title: 'Metodologías Ágiles (Enfoque PMI)',
      institution: 'Udemy',
      year: '2021',
      delay: 600
    },
    {
      logo: '/assets/img/logos/logo_Itla.png',
      title: 'Programación PSeInt',
      institution: 'Instituto Tecnológico de las Américas (ITLA)',
      year: '2022',
      delay: 700
    },
    {
      logo: '/assets/img/logos/logo_CertiProf.png',
      title: 'Scrum Foundation',
      institution: 'CertiProf Professional Knowledge',
      year: '2022',
      delay: 800
    },
    {
      logo: '/assets/img/logos/logo_linkedinlearning.png',
      title: 'Gestión de Proyectos Ágiles con Trello',
      institution: 'LinkedIn Learning',
      year: '2022',
      delay: 900
    },
    {
      logo: '/assets/img/logos/alura_logo.png',
      title: 'Desarrolladora Front End en formación',
      institution: 'Alura Latam',
      year: '2024',
      delay: 1000
    }
  ];

  return (
    <section className="formaciones" id="formacion" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="formaciones__title" data-aos="fade-down" data-aos-delay="200">
        Formación Académica
      </h1>
      <div className="formacion__cards">
        {formations.map((formation, index) => (
          <div 
            key={index} 
            className="formacion__card" 
            data-aos="fade-up" 
            data-aos-delay={formation.delay} 
            data-aos-duration="800"
          >
            <img 
              src={formation.logo} 
              alt={`Logo ${formation.institution}`} 
              className="formacion__img" 
              data-aos="zoom-in" 
              data-aos-delay={formation.delay + 100}
            />
            <h2 className="formacion__title">{formation.title}</h2>
            <p className="formacion__text">
              {formation.year} - {formation.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formation;