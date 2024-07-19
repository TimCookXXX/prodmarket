/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import styles from "./contacts-form.module.css";

const ContactsForm = ({ isOpen, onClose, productTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL;

  useEffect(() => {
    if (phone === "") {
      setPhone("+7");
    }
  }, [phone]);

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        return value.trim() && /^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(value.trim())
          ? ""
          : "Имя должно содержать только буквы, пробелы";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Пожалуйста, введите корректный email";
      case "phone":
        return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value)
          ? ""
          : "Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX";
      default:
        return "";
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(
        field,
        field === "name" ? name : field === "email" ? email : phone
      ),
    }));
  };

  const formatPhoneNumber = (value) => {
    if (!value) return "+7";
    const phoneNumber = value.replace(/\D/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 2) return "+7";
    if (phoneNumberLength < 5) return `+7 (${phoneNumber.slice(1)}`;
    if (phoneNumberLength < 8)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    if (phoneNumberLength < 10)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
        4,
        7
      )}-${phoneNumber.slice(7)}`;
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
    if (touched.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: validateField("phone", formattedPhoneNumber),
      }));
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[а-яА-ЯёЁa-zA-Z\s-]*$/.test(value)) {
      setName(value);
      if (touched.name) {
        setErrors((prev) => ({ ...prev, name: validateField("name", value) }));
      }
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateField("email", value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      phone: validateField("phone", phone),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true });

    if (!Object.values(newErrors).some(Boolean)) {
      setIsSubmitted(true);

      const formData = new FormData();
      formData.append("entry.1965209719", name.trim());
      formData.append("entry.985226151", email.trim());
      formData.append("entry.158704733", phone.trim());
      formData.append("entry.118723803", productTitle);

      fetch(googleFormUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
        .then(() => {
          setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setName("");
            setEmail("");
            setPhone("");
            setErrors({});
            setTouched({ name: false, email: false, phone: false });
          }, 2000);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setIsSubmitted(false);
        });
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.formTitle}>Оставить заявку</h2>
            <p className={styles.formSubtitle}>
              Заинтересовал продукт: {productTitle}
            </p>
            <div
              className={`${styles.inputGroup} ${
                touched.name &&
                (errors.name ? styles.inputInvalid : styles.inputValid)
              }`}
            >
              <label htmlFor="name" className={styles.label}>
                Имя:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                onBlur={() => handleBlur("name")}
                className={`${styles.input} ${
                  touched.name && errors.name ? styles.inputError : ""
                }`}
              />
              <span
                className={`${styles.errorMessage} ${
                  touched.name && errors.name ? styles.errorVisible : ""
                }`}
              >
                {errors.name}
              </span>
            </div>
            <div
              className={`${styles.inputGroup} ${
                touched.email &&
                (errors.email ? styles.inputInvalid : styles.inputValid)
              }`}
            >
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur("email")}
                className={`${styles.input} ${
                  touched.email && errors.email ? styles.inputError : ""
                }`}
              />
              <span
                className={`${styles.errorMessage} ${
                  touched.email && errors.email ? styles.errorVisible : ""
                }`}
              >
                {errors.email}
              </span>
            </div>
            <div
              className={`${styles.inputGroup} ${
                touched.phone &&
                (errors.phone ? styles.inputInvalid : styles.inputValid)
              }`}
            >
              <label htmlFor="phone" className={styles.label}>
                Телефон:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={() => handleBlur("phone")}
                onFocus={() => {
                  if (!phone) setPhone("+7");
                }}
                className={`${styles.input} ${
                  touched.phone && errors.phone ? styles.inputError : ""
                }`}
              />
              <span
                className={`${styles.errorMessage} ${
                  touched.phone && errors.phone ? styles.errorVisible : ""
                }`}
              >
                {errors.phone}
              </span>
            </div>
            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactsForm;
