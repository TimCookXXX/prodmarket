import { Phone } from "lucide-react";
import styles from "./call-to-action.module.css";

// eslint-disable-next-line react/prop-types
const CallToAction = ({ productTitle }) => {
  return (
    <div className={styles.ctaContainer}>
      <h2 className={styles.ctaTitle}>Заинтересовал {productTitle}?</h2>
      <p className={styles.ctaDescription}>
        Наши менеджеры готовы ответить на все ваши вопросы и помочь с
        оформлением заказа.
      </p>
      <a href="tel:+79183338558" className={styles.ctaButton}>
        <Phone size={20} />
        Позвонить сейчас
      </a>
    </div>
  );
};

export default CallToAction;
