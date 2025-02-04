<<<<<<< HEAD
import { FC } from 'react';
import './Hero.css';

interface SocialLink {
  icon: string;
  url: string;
  delay: number;
}

const Hero: FC = () => {
  const socialLinks: SocialLink[] = [
    { 
      icon: "uil uil-github",
      url: "https://github.com/Lizzy0981",
      delay: 1400 
    },
    { 
      icon: "uil uil-linkedin",
      url: "https://www.linkedin.com/in/eli-familia/",
      delay: 1500 
    },
    { 
      icon: "uil uil-twitter",
      url: "https://twitter.com/Lizzyfamilia",
      delay: 1600 
    }
  ];

  return (
    <section className="banner container" data-aos="fade" data-aos-duration="1000">
      <div className="banner__img"></div>
      <div className="hero" data-aos="fade-up" data-aos-delay="300">
        <img
          src="/assets/img/about.png"
          alt="Foto de perfil"
          className="hero__img__profile"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
        
        <div className="hero__text">
          <h1 className="hero__text__title" data-aos="fade-right" data-aos-delay="800">
            Hola, soy Elizabeth Diaz Familia
          </h1>
          <p className="hero__text__paragraph" data-aos="fade-left" data-aos-delay="1000">
            Desarrolladora web apasionada por crear soluciones creativas y funcionales.
          </p>
        </div>

        <ul className="hero__text__list" data-aos="fade-up" data-aos-delay="1200">
          {socialLinks.map((link, index) => (
            <li 
              key={index} 
              className="hero__text__list__item" 
              data-aos="zoom-in" 
              data-aos-delay={link.delay}
            >
              <a 
                href={link.url} 
                className="hero__text__list__item__link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
          <li 
            className="hero__text__list__item" 
            data-aos="zoom-in" 
            data-aos-delay="1700"
          >
            <a 
              href="/assets/img/CV - Elizabeth Diaz Familia.pdf" 
              className="hero__text__list__item__link hero__text__list__item__link--curriculum" 
              download 
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

=======
import { FC } from 'react';
import './Hero.css';

interface SocialLink {
  icon: string;
  url: string;
  delay: number;
}

const Hero: FC = () => {
  const socialLinks: SocialLink[] = [
    { 
      icon: "uil uil-github",
      url: "https://github.com/Lizzy0981",
      delay: 1400 
    },
    { 
      icon: "uil uil-linkedin",
      url: "https://www.linkedin.com/in/eli-familia/",
      delay: 1500 
    },
    { 
      icon: "uil uil-twitter",
      url: "https://twitter.com/Lizzyfamilia",
      delay: 1600 
    }
  ];

  return (
    <section className="banner container" data-aos="fade" data-aos-duration="1000">
      <div className="banner__img"></div>
      <div className="hero" data-aos="fade-up" data-aos-delay="300">
        <img
          src="/assets/img/about.png"
          alt="Foto de perfil"
          className="hero__img__profile"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
        
        <div className="hero__text">
          <h1 className="hero__text__title" data-aos="fade-right" data-aos-delay="800">
            Hola, soy Elizabeth Diaz Familia
          </h1>
          <p className="hero__text__paragraph" data-aos="fade-left" data-aos-delay="1000">
            Desarrolladora web apasionada por crear soluciones creativas y funcionales.
          </p>
        </div>

        <ul className="hero__text__list" data-aos="fade-up" data-aos-delay="1200">
          {socialLinks.map((link, index) => (
            <li 
              key={index} 
              className="hero__text__list__item" 
              data-aos="zoom-in" 
              data-aos-delay={link.delay}
            >
              <a 
                href={link.url} 
                className="hero__text__list__item__link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
          <li 
            className="hero__text__list__item" 
            data-aos="zoom-in" 
            data-aos-delay="1700"
          >
            <a 
              href="/assets/img/CV - Elizabeth Diaz Familia.pdf" 
              className="hero__text__list__item__link hero__text__list__item__link--curriculum" 
              download 
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

>>>>>>> 235c25cbf8e633a36f3a91748dbe6580f1c216c5
export default Hero;