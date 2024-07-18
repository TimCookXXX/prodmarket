import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./FrozenProductCarousel.module.css";

const FrozenProductCarousel = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const controls = useAnimation();

  const products = [
    {
      id: 1,
      name: "Замороженное мясо",
      image: "https://i.ibb.co/Fqkh638/scale-1200.jpg",
    },
    {
      id: 2,
      name: "Мясные полуфабрикаты",
      image: "https://i.ibb.co/TtkVSW3/unnamed.jpg",
    },
    {
      id: 3,
      name: "Рыба и морепродукты",
      image: "https://i.ibb.co/wMYxXPT/ryba-morozh.jpg",
    },
    {
      id: 4,
      name: "Замороженные овощи",
      image: "https://i.ibb.co/X72pXPb/arrangement-frozen-food-table.jpg",
    },
    {
      id: 5,
      name: "Замороженные ягоды",
      image: "https://i.ibb.co/wL6DB8v/volga.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1, rotateY: 0 });
  }, [currentProduct, controls]);

  const handleProductClick = (index) => {
    setCurrentProduct(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.frost}>
        <motion.div
          key={currentProduct}
          className={styles.productContainer}
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <img
            src={products[currentProduct].image}
            alt={products[currentProduct].name}
            className={styles.productImage}
          />
          <h2 className={styles.productName}>
            {products[currentProduct].name}
          </h2>
        </motion.div>
      </div>
      <div className={styles.indicators}>
        {products.map((product, index) => (
          <button
            key={product.id}
            className={`${styles.indicator} ${
              index === currentProduct ? styles.active : ""
            }`}
            onClick={() => handleProductClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FrozenProductCarousel;
