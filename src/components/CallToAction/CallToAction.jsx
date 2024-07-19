/* eslint-disable react/prop-types */
import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import styles from "./call-to-action.module.css";
import ContactsForm from "../ContactsForm/ContactsFrom";

const CallToAction = ({ productTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.ctaContainer}>
      <h2 className={styles.ctaTitle}>Заинтересовал {productTitle}?</h2>
      <p className={styles.ctaDescription}>
        Наши менеджеры готовы ответить на все ваши вопросы и помочь с
        оформлением заказа.
      </p>
      <div className={styles.ctaButtons}>
        <a
          href="tel:+79183338558"
          className={`${styles.ctaButton} ${styles.callButton}`}
        >
          <Phone size={20} />
          Позвонить сейчас
        </a>
        <button
          onClick={openModal}
          className={`${styles.ctaButton} ${styles.formButton}`}
        >
          <Mail size={20} />
          Оставить заявку
        </button>
      </div>
      <ContactsForm
        isOpen={isModalOpen}
        onClose={closeModal}
        productTitle={productTitle}
      />
    </div>
  );
};

export default CallToAction;
