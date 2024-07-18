import { motion } from "framer-motion";
import { Search, ThermometerSnowflake, Package } from "lucide-react";
import styles from "./product-selection.module.css";
import Partner1 from "../../assets/Blagoyar.png";
import Partner2 from "../../assets/Miratorg.png";
import Partner3 from "../../assets/Prioskolie.png";
import Partner4 from "../../assets/Resurs.png";
import Partner5 from "../../assets/Varviks.png";
import Partner6 from "../../assets/BaltiiskiiKok.png";
import InfiniteCarousel from "../InfiniteCarousel/InfiniteCarousel";

const ProductSelection = () => {
  const steps = [
    {
      icon: Search,
      title: "Тщательный выбор продуктов",
      description:
        "Мы внимательно отбираем продукты от проверенных производителей, учитывая качество и отзывы клиентов",
    },
    {
      icon: ThermometerSnowflake,
      title: "Правильное хранение",
      description:
        "Обеспечиваем оптимальные условия хранения для сохранения качества и вкуса продуктов",
    },
    {
      icon: Package,
      title: "Широкий ассортимент",
      description:
        "Предлагаем разнообразие замороженных продуктов для удовлетворения потребностей всех клиентов",
    },
  ];

  const partners = [
    { name: "Партнер 1", logo: Partner1 },
    { name: "Партнер 2", logo: Partner2 },
    { name: "Партнер 3", logo: Partner3 },
    { name: "Партнер 4", logo: Partner4 },
    { name: "Партнер 5", logo: Partner5 },
    { name: "Партнер 6", logo: Partner6 },
  ];

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
      className={styles.productSelection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.background}>
        <div className={styles.backgroundOverlay}></div>
      </div>
      <motion.h2 className={styles.title} variants={itemVariants}>
        Наш подход к работе
      </motion.h2>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={styles.step}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
          >
            <div className={styles.iconWrapper}>
              <step.icon className={styles.icon} />
            </div>
            <h3>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div className={styles.partnerInfo} variants={itemVariants}>
        <h3>Наши надежные партнеры</h3>
        <p>
          Мы сотрудничаем только с проверенными производителями и поставщиками,
          чтобы гарантировать нашим клиентам высокое качество продукции.
        </p>
        <InfiniteCarousel items={partners} />
      </motion.div>
    </motion.section>
  );
};

export default ProductSelection;
