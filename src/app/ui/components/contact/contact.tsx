'use client';

import styles from './contact.module.css';
import { Button } from './button';
import InputFields from './inputFields';
import Modal from '../modal';
import Warning from './warning';
import { useContact } from '@/app/lib/hooks/useContact';
import SocialMedia from '../header/socialMedia';
import SectionTitle from '../sectionTitle';
import { useScreenEvents } from '@/app/lib/hooks/useScreenEvents';

export const ContactForm = () => {
  const { sendMessage, getData, warning, isOnFocus, showModal } = useContact();
  const { mobileScroll } = useScreenEvents();
  const isMobileScrollInRange = mobileScroll >= 85;

  return (
    <>
      <p style={{ position: 'fixed', color: 'pink', top: '5px' }}>
        {mobileScroll}
      </p>
      <section
        className={styles.contact}
        id="contact"
      >
        <SectionTitle
          text="Contacto"
          show={isMobileScrollInRange}
        />
        <div className={styles.contactForm}>
          <form onSubmit={sendMessage}>
            <InputFields
              action={getData}
              label="Nombre:"
              type="text"
              name="name"
              warning={!warning.name && isOnFocus.name}
              isOnFocus={isOnFocus.name}
              warningMessage="Escribe un nombre válido"
            />

            <InputFields
              action={getData}
              label="Email:"
              type="text"
              name="email"
              warning={!warning.email && isOnFocus.email}
              isOnFocus={isOnFocus.email}
              warningMessage="Escribe un email válido"
            />
            <InputFields
              action={getData}
              label="Teléfono:"
              type="text"
              name="phone"
              warning={!warning.phone && isOnFocus.phone}
              isOnFocus={isOnFocus.phone}
              warningMessage="Escribe un teléfono válido"
            />

            <div>
              <label id="text-area-label">Mensaje:</label>
              <textarea
                name="message"
                defaultValue="Hello! your message here"
                onChange={getData}
                aria-labelledby="text-area-label"
              />
            </div>
            <Warning
              show={!warning.message && isOnFocus.message}
              message="Escribe un mensaje válido"
            />
            <div>
              <Button
                text="Enviar"
                isDisabled={!warning.allFields}
              />
            </div>
          </form>
          <Modal
            show={showModal}
            message="Mensaje enviado"
          />
        </div>
      </section>
      <footer>
        <SocialMedia />
      </footer>
    </>
  );
};
