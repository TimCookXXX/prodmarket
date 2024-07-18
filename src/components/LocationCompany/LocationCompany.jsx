import styles from "./company-location.module.css";
import YandexMap from "../YandexMap/YandexMap";

const CompanyLocation = () => {
  return (
    <section className={styles.location}>
      <h2 className={styles.title}>Наше местоположение</h2>
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <YandexMap />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.companyName}>ООО «Продмаркет»</h3>
          <p className={styles.address}>
            353207, Краснодарский край, Динской район, поселок Агроном, улица
            Светлая 1Б/1
          </p>
          <p className={styles.contactInfo}>
            <a href="tel:+79183338558">+7 (918) 333-85-58</a>
          </p>
          <p className={styles.contactInfo}>
            <a href="mailto:Prodmarket23@mail.ru">Prodmarket23@mail.ru</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyLocation;
