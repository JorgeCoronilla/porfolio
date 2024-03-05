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
  const { mobileScroll, isMobileDevice } = useScreenEvents();
  const isMobileScrollInRange = mobileScroll >= 92;

  return (
    <>
      <section
        className={styles.contact}
        id="contact"
      >
        <SectionTitle
          text="Contact"
          show={isMobileScrollInRange && isMobileDevice}
        />
        <div className={styles.contactForm}>
          <form onSubmit={sendMessage}>
            <InputFields
              action={getData}
              label="Name:"
              type="text"
              name="name"
              warning={!warning.name && isOnFocus.name}
              isOnFocus={isOnFocus.name}
              warningMessage="Please, write a valid name"
            />

            <InputFields
              action={getData}
              label="Email:"
              type="text"
              name="email"
              warning={!warning.email && isOnFocus.email}
              isOnFocus={isOnFocus.email}
              warningMessage="Please, write a valid email"
            />
            <InputFields
              action={getData}
              label="Phone:"
              type="text"
              name="phone"
              warning={!warning.phone && isOnFocus.phone}
              isOnFocus={isOnFocus.phone}
              warningMessage="Please, write a valid phone number"
            />

            <div>
              <label id="text-area-label">Message:</label>
              <textarea
                name="message"
                defaultValue="Hello! I would like to talk with you about..."
                onChange={getData}
                aria-labelledby="text-area-label"
              />
            </div>
            <Warning
              show={!warning.message && isOnFocus.message}
              message="Please, write a message"
            />
            <div>
              <Button
                text="Send"
                isDisabled={!warning.allFields}
              />
            </div>
          </form>
          <Modal
            show={showModal}
            message="Message received"
          />
        </div>
      </section>
      <footer>
        <SocialMedia />
      </footer>
    </>
  );
};
