import { Email, Github } from './icons';
import styles from './Contact.module.css';
import LinkedIn from './icons/LinkedIn';
import Instagram from './icons/Instagram';

function Contact() {
  return (
    <div className={styles.container}>
      <Github />
      <Email />
      <LinkedIn />
      <Instagram />
    </div>
  );
}

export default Contact;
