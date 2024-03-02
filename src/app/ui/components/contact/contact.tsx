'use client';

import styles from './contact.module.css';
import { Button } from './button';
import InputFields from './inputFields';
import Modal from '../modal';
import Warning from './warning';
import { useContact } from '@/app/lib/hooks/useContact';

export const ContactForm = () => {
  const { sendMessage, getData, warning, isOnFocus, showModal } = useContact();

  return (
    <section
      className={styles.contact}
      id="contact"
    >
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
  );
};
