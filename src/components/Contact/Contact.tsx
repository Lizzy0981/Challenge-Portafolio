<<<<<<< HEAD
// src/components/Contact/Contact.tsx
import React, { useEffect } from 'react';
import { valida, validaText } from '../../utils/validaciones';
import './Contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>('input');
    const textarea = document.querySelector<HTMLTextAreaElement>('textarea');

    const handleInputBlur = (event: FocusEvent) => {
      const target = event.target as HTMLInputElement;
      valida(target);
    };

    const handleTextareaBlur = (event: FocusEvent) => {
      const target = event.target as HTMLTextAreaElement;
      validaText(target);
    };

    inputs.forEach(input => {
      input.addEventListener('blur', handleInputBlur);
    });

    if (textarea) {
      textarea.addEventListener('blur', handleTextareaBlur);
    }

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('blur', handleInputBlur);
      });
      if (textarea) {
        textarea.removeEventListener('blur', handleTextareaBlur);
      }
    };
  }, []);

  return (
    <section id="contacto" className="contacto container" data-aos="fade-up" data-aos-duration="1000">
      <div className="contacto__text" data-aos="fade-down" data-aos-delay="200">
        <h1 className="contacto__text__title" data-aos="fade-right" data-aos-delay="300">
          Contacto
        </h1>
        <p className="contacto__text__paragraph" data-aos="fade-left" data-aos-delay="400">
          ¿Quieres contactarme?
        </p>
        <p className="contacto__text__paragraph" data-aos="fade-left" data-aos-delay="500">
          Complete el siguiente formulario y me pondré en contacto con usted lo más rápido posible
        </p>
      </div>

      <form
        action="https://formspree.io/f/moqzwrvg"
        method="POST"
        className="form"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <fieldset>
          <div className="input-container" data-aos="fade-right" data-aos-delay="700">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              className="input"
              data-tipo="nombre"
              pattern="^.{1,50}$"
              required
            />
            <label className="input-label" htmlFor="name">
              Nombre
            </label>
            <span className="input-message-error"></span>
          </div>

          <div className="input-container" data-aos="fade-left" data-aos-delay="800">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input"
              data-tipo="email"
              required
            />
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <span className="input-message-error"></span>
          </div>

          <div className="input-container" data-aos="fade-right" data-aos-delay="900">
            <input
              type="text"
              name="asunto"
              id="asunto"
              placeholder="asunto"
              className="input"
              pattern="^.{1,50}$"
              data-tipo="asunto"
              required
            />
            <label className="input-label" htmlFor="asunto">
              Asunto
            </label>
            <span className="input-message-error"></span>
          </div>

          <div className="textarea-container" data-aos="fade-left" data-aos-delay="1000">
            <textarea
              name="mensaje"
              id="mensaje"
              rows={8}
              className="textarea-input"
              required
              data-tipo="message"
            ></textarea>
            <label className="textarea-label" htmlFor="mensaje">
              Mensaje
            </label>
            <span className="textarea-message-error"></span>
          </div>
        </fieldset>

        <button
          type="submit"
          className="btn btn-form"
          data-aos="zoom-in"
          data-aos-delay="1100"
        >
          <i className="uil uil-message"></i>Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
=======
import React, { useEffect } from 'react';
import { valida, validaText } from '../../utils/validaciones';
import './Contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>('input');
    const textarea = document.querySelector<HTMLTextAreaElement>('textarea');

    const handleInputBlur = (event: FocusEvent) => {
      const target = event.target as HTMLInputElement;
      valida(target);
    };

    const handleTextareaBlur = (event: FocusEvent) => {
      const target = event.target as HTMLTextAreaElement;
      validaText(target);
    };

    inputs.forEach(input => {
      input.addEventListener('blur', handleInputBlur);
    });

    if (textarea) {
      textarea.addEventListener('blur', handleTextareaBlur);
    }

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('blur', handleInputBlur);
      });
      if (textarea) {
        textarea.removeEventListener('blur', handleTextareaBlur);
      }
    };
  }, []);

  return (
    <section id="contacto" className="contacto container" data-aos="fade-up" data-aos-duration="1000">
      <div className="contacto__text" data-aos="fade-down" data-aos-delay="200">
        <h1 className="contacto__text__title" data-aos="fade-right" data-aos-delay="300">
          Contacto
        </h1>
        <p className="contacto__text__paragraph" data-aos="fade-left" data-aos-delay="400">
          ¿Quieres contactarme?
        </p>
        <p className="contacto__text__paragraph" data-aos="fade-left" data-aos-delay="500">
          Complete el siguiente formulario y me pondré en contacto con usted lo más rápido posible
        </p>
      </div>

      <form
        action="https://formspree.io/f/moqzwrvg"
        method="POST"
        className="form"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <fieldset>
          <div className="input-container" data-aos="fade-right" data-aos-delay="700">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              className="input"
              data-tipo="nombre"
              pattern="^.{1,50}$"
              required
            />
            <label className="input-label" htmlFor="name">
              Nombre
            </label>
            <span className="input-message-error"></span>
          </div>

          <div className="input-container" data-aos="fade-left" data-aos-delay="800">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input"
              data-tipo="email"
              required
            />
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <span className="input-message-error"></span>
          </div>

          <div className="input-container" data-aos="fade-right" data-aos-delay="900">
            <input
              type="text"
              name="asunto"
              id="asunto"
              placeholder="asunto"
              className="input"
              pattern="^.{1,50}$"
              data-tipo="asunto"
              required
            />
            <label className="input-label" htmlFor="asunto">
              Asunto
            </label>
            <span className="input-message-error"></span>
          </div>

          <div className="textarea-container" data-aos="fade-left" data-aos-delay="1000">
            <textarea
              name="mensaje"
              id="mensaje"
              rows={8}
              className="textarea-input"
              required
              data-tipo="message"
            ></textarea>
            <label className="textarea-label" htmlFor="mensaje">
              Mensaje
            </label>
            <span className="textarea-message-error"></span>
          </div>
        </fieldset>

        <button
          type="submit"
          className="btn btn-form"
          data-aos="zoom-in"
          data-aos-delay="1100"
        >
          <i className="uil uil-message"></i>Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
>>>>>>> 235c25cbf8e633a36f3a91748dbe6580f1c216c5
