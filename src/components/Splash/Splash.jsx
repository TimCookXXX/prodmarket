/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./splash-screen.module.css";
import logo from "../../assets/Group.svg";

const SplashScreen = ({ onFinish }) => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await controls.start("pulse");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await controls.start("exit");
      onFinish();
    };

    sequence();

    return () => {
      controls.stop();
    };
  }, [controls, onFinish]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = -(e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        times: [0, 0.5, 1],
        repeat: 1,
        repeatType: "reverse",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className={styles.splashScreen}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div ref={containerRef} className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.glow}></div>
        <div className={styles.particles}>
          {[...Array(50)].map((_, index) => (
            <div
              key={index}
              className={styles.particle}
              style={{
                "--delay": `${Math.random() * 5}s`,
                "--duration": `${5 + Math.random() * 10}s`,
                "--x-start": `${-50 + Math.random() * 100}%`,
                "--x-end": `${-50 + Math.random() * 100}%`,
                "--y-start": `${-50 + Math.random() * 100}%`,
                "--y-end": `${-50 + Math.random() * 100}%`,
                "--size": `${2 + Math.random() * 3}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.companyName}>ПродМаркет</div>
      <div className={styles.tagline}>Лучшие замороженные продукты для вас</div>
    </motion.div>
  );
};

export default SplashScreen;
