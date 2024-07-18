/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Truck, Package, Clock } from "lucide-react";
import styles from "./about-company.module.css";
import logo from "../../assets/Group.svg";

const FloatingElement = ({ delay, duration, size, top, left }) => (
  <div
    className={styles.floatingElement}
    style={{
      "--delay": `${delay}s`,
      "--duration": `${duration}s`,
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
    }}
  />
);

const AboutCompany = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      className={styles.aboutSection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.backgroundElements}>
        <FloatingElement delay={0} duration={15} size={50} top={10} left={5} />
        <FloatingElement delay={2} duration={18} size={30} top={20} left={80} />
        <FloatingElement delay={4} duration={20} size={40} top={70} left={10} />
        <FloatingElement delay={6} duration={17} size={25} top={80} left={70} />
        <FloatingElement delay={8} duration={22} size={35} top={40} left={90} />
      </div>
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={itemVariants}>
          О компании Продмаркет
        </motion.h2>
        <div className={styles.content}>
          <motion.div className={styles.imageWrapper} variants={itemVariants}>
            <img src={logo} alt="Продмаркет" className={styles.companyImage} />
          </motion.div>
          <motion.div className={styles.textContent} variants={itemVariants}>
            <p className={styles.description}>
              Продмаркет - ваш надежный поставщик качественных замороженных
              продуктов. Мы специализируемся на поставке широкого ассортимента
              замороженных мясных, рыбных, овощных и ягодных продуктов для
              оптовых и розничных клиентов.
            </p>
          </motion.div>
        </div>
        <div className={styles.features}>
          {[
            {
              Icon: Truck,
              title: "Оперативная доставка",
              description:
                "Доставляем заказы в кратчайшие сроки, сохраняя качество продукции",
            },
            {
              Icon: Package,
              title: "Широкий ассортимент",
              description:
                "Предлагаем разнообразные замороженные продукты от проверенных поставщиков",
            },
            {
              Icon: Clock,
              title: "Своевременность",
              description: "Всегда выполняем заказы в оговоренные сроки",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={styles.feature}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <feature.Icon className={styles.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutCompany;
