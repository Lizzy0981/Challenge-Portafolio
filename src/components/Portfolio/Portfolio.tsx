<<<<<<< HEAD
import { FC } from 'react';
import './Portfolio.css';

const Portfolio: FC = () => {
  const projects = [
    {
      image: '/assets/img/proyectos/photografy.jpeg',
      title: 'Photografy Portfolio',
      description: 'Proyecto Profesional',
      github: 'https://github.com/Lizzy0981/Photografy-Portfolio',
      demo: 'https://photografy-portfolio-chi.vercel.app/',
      delay: 300
    },
    {
      image: '/assets/img/proyectos/encriptador.png',
      title: 'Encriptador',
      description: 'Challenge Alura Oracle',
      github: 'https://github.com/Lizzy0981/alura-challenge-encriptador-de-texto',
      demo: 'https://alura-challenge-encriptador-de-texto-sable.vercel.app/',
      delay: 400
    },
    {
      image: '/assets/img/proyectos/pagina-freelancer.jpeg',
      title: 'Pagina-Freelancer',
      description: 'Proyecto personal',
      github: 'https://github.com/Lizzy0981/Pagina-Freelancer/tree/main',
      demo: 'https://pagina-freelancer-theta.vercel.app/',
      delay: 500
    },
    {
      image: '/assets/img/proyectos/tiendamodaregistro.jpeg',
      title: 'TiendaModa-Registro',
      description: 'Proyecto Personal',
      github: 'https://github.com/Lizzy0981/tiendamoda-registro?tab=readme-ov-file',
      demo: 'https://tiendamoda-registro.vercel.app/',
      delay: 600
    },
    {
      image: '/assets/img/proyectos/portafoliofrontend.jpeg',
      title: 'Portafolio Front End',
      description: 'Proyecto de Clases',
      github: 'https://github.com/Lizzy0981/PORTAFOLIO/tree/main',
      demo: 'https://portafolio-beige-iota.vercel.app/',
      delay: 700
    },
    {
      image: '/assets/img/proyectos/alurageek.png',
      title: 'AluraGeek',
      description: 'Challenge Alura Oracle',
      github: 'https://github.com/Lizzy0981/Challenge-Alura-Geek',
      demo: 'https://glowing-bublanina-3f0328.netlify.app/',
      delay: 800
    }
  ];

  return (
    <section id="experiencia" className="portfolios container" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="portfolios__title" data-aos="fade-down" data-aos-delay="200">
        Experiencia en Programación
      </h1>
      <div className="portfolios__projects">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="portfolio__project"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={project.delay}
            data-aos-duration="800"
          >
            <span className="portfolio__project__img" data-aos="zoom-in" data-aos-delay={project.delay + 100}>
              <img src={project.image} alt={project.title} />
            </span>
            <div 
              className="portfolio__description"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={project.delay + 200}
            >
              <h2 className="portfolio__description__title">{project.title}</h2>
              <p className="portfolio__description__text">{project.description}</p>
              <div className="portfolio__description__btn" data-aos="fade-up" data-aos-delay={project.delay + 300}>
                <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
=======
import { FC } from 'react';
import './Portfolio.css';

const Portfolio: FC = () => {
  const projects = [
    {
      image: '/assets/img/proyectos/photografy.jpeg',
      title: 'Photografy Portfolio',
      description: 'Proyecto Profesional',
      github: 'https://github.com/Lizzy0981/Photografy-Portfolio',
      demo: 'https://photografy-portfolio-chi.vercel.app/',
      delay: 300
    },
    {
      image: '/assets/img/proyectos/encriptador.png',
      title: 'Encriptador',
      description: 'Challenge Alura Oracle',
      github: 'https://github.com/Lizzy0981/alura-challenge-encriptador-de-texto',
      demo: 'https://alura-challenge-encriptador-de-texto-sable.vercel.app/',
      delay: 400
    },
    {
      image: '/assets/img/proyectos/pagina-freelancer.jpeg',
      title: 'Pagina-Freelancer',
      description: 'Proyecto personal',
      github: 'https://github.com/Lizzy0981/Pagina-Freelancer/tree/main',
      demo: 'https://pagina-freelancer-theta.vercel.app/',
      delay: 500
    },
    {
      image: '/assets/img/proyectos/tiendamodaregistro.jpeg',
      title: 'TiendaModa-Registro',
      description: 'Proyecto Personal',
      github: 'https://github.com/Lizzy0981/tiendamoda-registro?tab=readme-ov-file',
      demo: 'https://tiendamoda-registro.vercel.app/',
      delay: 600
    },
    {
      image: '/assets/img/proyectos/portafoliofrontend.jpeg',
      title: 'Portafolio Front End',
      description: 'Proyecto de Clases',
      github: 'https://github.com/Lizzy0981/PORTAFOLIO/tree/main',
      demo: 'https://portafolio-beige-iota.vercel.app/',
      delay: 700
    },
    {
      image: '/assets/img/proyectos/alurageek.png',
      title: 'AluraGeek',
      description: 'Challenge Alura Oracle',
      github: 'https://github.com/Lizzy0981/Challenge-Alura-Geek',
      demo: 'https://glowing-bublanina-3f0328.netlify.app/',
      delay: 800
    }
  ];

  return (
    <section id="experiencia" className="portfolios container" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="portfolios__title" data-aos="fade-down" data-aos-delay="200">
        Experiencia en Programación
      </h1>
      <div className="portfolios__projects">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="portfolio__project"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={project.delay}
            data-aos-duration="800"
          >
            <span className="portfolio__project__img" data-aos="zoom-in" data-aos-delay={project.delay + 100}>
              <img src={project.image} alt={project.title} />
            </span>
            <div 
              className="portfolio__description"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={project.delay + 200}
            >
              <h2 className="portfolio__description__title">{project.title}</h2>
              <p className="portfolio__description__text">{project.description}</p>
              <div className="portfolio__description__btn" data-aos="fade-up" data-aos-delay={project.delay + 300}>
                <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
>>>>>>> 235c25cbf8e633a36f3a91748dbe6580f1c216c5
