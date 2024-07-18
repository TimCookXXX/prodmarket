import {
  Truck,
  MapPin,
  Calendar,
  Clock,
  Thermometer,
  PhoneCall,
} from "lucide-react";
import styles from "./delivery.module.css";

const Delivery = () => {
  return (
    <section className={styles.deliverySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Доставка по Краснодару и Краснодарскому краю
        </h2>
        <p className={styles.description}>
          Мы обеспечиваем быструю и надежную доставку замороженных продуктов,
          сохраняя их качество от нашего склада до вашего холодильника.
        </p>
        <div className={styles.deliveryOptions}>
          <div className={styles.option}>
            <Truck className={styles.icon} />
            <h3>Краснодар</h3>
            <p>Доставка в день заказа или на следующий день</p>
            <span className={styles.price}>Бесплатно</span>
          </div>
          <div className={styles.option}>
            <MapPin className={styles.icon} />
            <h3>Краснодарский край</h3>
            <p>Доставка в течение 1-3 дней</p>
            <span className={styles.price}>Бесплатно</span>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <Calendar className={styles.featureIcon} />
            <h4>Удобное расписание</h4>
            <p>Выберите удобный день и время доставки</p>
          </div>
          <div className={styles.feature}>
            <Clock className={styles.featureIcon} />
            <h4>Точность времени</h4>
            <p>Доставим в выбранный 2-часовой интервал</p>
          </div>
          <div className={styles.feature}>
            <Thermometer className={styles.featureIcon} />
            <h4>Контроль температуры</h4>
            <p>Специальные рефрижераторы сохраняют продукты замороженными</p>
          </div>
        </div>
        <div className={styles.callToActionSection}>
          <h3>Остались вопросы?</h3>
          <p>Наши менеджеры готовы ответить на все ваши вопросы о доставке.</p>
          <a href="tel:+79183338558" className={styles.callToAction}>
            <PhoneCall className={styles.callIcon} />
            Позвонить нам
          </a>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
