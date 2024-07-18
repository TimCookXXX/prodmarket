import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <h3 className={styles.logo}>
              <span className={styles.logoIcon}>✻</span> Продмаркет
            </h3>
            <p className={styles.subtext}>Замороженные продукты питания</p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Контакты</h4>
            <div className={styles.contactInfo}>
              <a href="tel:79183338558" className={styles.contactLink}>
                <i className="fas fa-phone"></i>
                <span>+7 (918) 333-85-58</span>
              </a>
              <a
                href="mailto:Prodmarket23@mail.ru"
                className={styles.contactLink}
              >
                <i className="fas fa-envelope"></i>
                <span>Prodmarket23@mail.ru</span>
              </a>
              <p className={styles.address}>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  353207, Краснодарский край, Динской район, поселок Агроном,
                  улица Светлая 1Б/1
                </span>
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Реквизиты</h4>
            <ul className={styles.list}>
              <li>ООО «Продмаркет»</li>
              <li>ИНН 2311352601</li>
              <li>КПП 231101001</li>
              <li>ОГРН 1232300043304</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Навигация</h4>
            <ul className={styles.list}>
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/partners">Партнерам</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
              <li>
                <Link to="/delivery">Доставка</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © ООО «Продмаркет», {new Date().getFullYear()} | Все права защищены
          </p>
          <ul className={styles.legalLinks}>
            <li>
              <Link to="/privacy">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link to="/terms">Условия использования</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
