<<<<<<< HEAD
import { FC } from 'react';
import './Hobbies.css';

const Hobbies: FC = () => {
  const hobbies = [
    { 
      name: 'Escuchar Musica', 
      icon: '/assets/img/hobbies/icons-escuchar-musica.png',
      delay: 200 
    },
    { 
      name: 'Ejercicios', 
      icon: '/assets/img/hobbies/icons-ejercicios.png',
      delay: 300 
    },
    { 
      name: 'Leer libros', 
      icon: '/assets/img/hobbies/icons-leer.png',
      delay: 400 
    },
    { 
      name: 'Cocinar', 
      icon: '/assets/img/hobbies/icons-cocinar.png',
      delay: 500 
    },
    { 
      name: 'Viajar', 
      icon: '/assets/img/hobbies/icons-viajar.png',
      delay: 600 
    },
    { 
      name: 'Ver series', 
      icon: '/assets/img/hobbies/icons-ver-series.png',
      delay: 700 
    }
  ];

  return (
    <section className="hobbies container" id="hobbies" data-aos="fade-up" data-aos-duration="800">
      <h1 className="hobbies__title" data-aos="fade-down" data-aos-delay="100">
        Hobbies
      </h1>
      <div className="hobbies__card">
        {hobbies.map((hobby, index) => (
          <div 
            key={index}
            className="hobbie" 
            data-aos="zoom-in" 
            data-aos-delay={hobby.delay}
          >
            <img
              src={hobby.icon}
              alt={hobby.name}
              className="hobbie__img" 
            />
            <h4 className="hobbie__text">{hobby.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
=======
import { FC } from 'react';
import './Hobbies.css';

const Hobbies: FC = () => {
  const hobbies = [
    { 
      name: 'Escuchar Musica', 
      icon: '/assets/img/hobbies/icons-escuchar-musica.png',
      delay: 200 
    },
    { 
      name: 'Ejercicios', 
      icon: '/assets/img/hobbies/icons-ejercicios.png',
      delay: 300 
    },
    { 
      name: 'Leer libros', 
      icon: '/assets/img/hobbies/icons-leer.png',
      delay: 400 
    },
    { 
      name: 'Cocinar', 
      icon: '/assets/img/hobbies/icons-cocinar.png',
      delay: 500 
    },
    { 
      name: 'Viajar', 
      icon: '/assets/img/hobbies/icons-viajar.png',
      delay: 600 
    },
    { 
      name: 'Ver series', 
      icon: '/assets/img/hobbies/icons-ver-series.png',
      delay: 700 
    }
  ];

  return (
    <section className="hobbies container" id="hobbies" data-aos="fade-up" data-aos-duration="800">
      <h1 className="hobbies__title" data-aos="fade-down" data-aos-delay="100">
        Hobbies
      </h1>
      <div className="hobbies__card">
        {hobbies.map((hobby, index) => (
          <div 
            key={index}
            className="hobbie" 
            data-aos="zoom-in" 
            data-aos-delay={hobby.delay}
          >
            <img
              src={hobby.icon}
              alt={hobby.name}
              className="hobbie__img" 
            />
            <h4 className="hobbie__text">{hobby.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
>>>>>>> 235c25cbf8e633a36f3a91748dbe6580f1c216c5
