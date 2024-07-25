import { MapPin, Phone, Mail, Clock, FileText, Briefcase } from "lucide-react";
import YandexMap from "../../components/YandexMap/YandexMap";
import styles from "./contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Свяжитесь с нами</h2>
        <p className={styles.subtitle}>
          Мы всегда рады ответить на ваши вопросы
        </p>

        <div className={styles.contentWrapper}>
          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <h3>
                <Briefcase className={styles.icon} /> ООО «Продмаркет»
              </h3>
              <p>
                <MapPin className={styles.icon} />
                <span>
                  <strong>Юр. адрес:</strong> РФ, 350901, Краснодарский край, г.
                  Краснодар, ул. 40-ия победы 144/4, оф.99
                </span>
              </p>
              <p>
                <MapPin className={styles.icon} />
                <span>
                  <strong>Факт. адрес:</strong> РФ, 353207, Краснодарский край,
                  Динской район, поселок Агроном, улица Светлая 1Б/1
                </span>
              </p>
              <p>
                <Phone className={styles.icon} />
                <a href="tel:+79183338558">+7 (918) 333-85-58</a>
              </p>
              <p>
                <Phone className={styles.icon} />
                <a href="tel:+79615005775">+7 (961) 500-57-75</a>
              </p>
              <p>
                <Phone className={styles.icon} />
                <a href="tel:+79282345000">+7 (928) 234-50-00</a>
              </p>
              <p>
                <Mail className={styles.icon} />
                <a href="mailto:Prodmarket23@mail.ru">Prodmarket23@mail.ru</a>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>
                <Clock className={styles.icon} /> Время работы
              </h3>
              <ul className={styles.workingHours}>
                <li>
                  <span>Пн-Пт:</span> <span>8:00 - 17:00</span>
                </li>
                <li>
                  <span>Сб:</span> <span>9:00 - 12:00</span>
                </li>
                <li>
                  <span>Вс:</span> <span>Выходной</span>
                </li>
              </ul>
            </div>

            <div className={styles.infoBlock}>
              <h3>
                <FileText className={styles.icon} /> Реквизиты
              </h3>
              <ul className={styles.requisites}>
                <li>
                  <span>ИНН/КПП:</span> <span>2311352601/231101001</span>
                </li>
                <li>
                  <span>ОГРН:</span> <span>1232300043304</span>
                </li>
                <li>
                  <span>Банк:</span>{" "}
                  <span>Филиал «Ростовский» АО «Альфа-Банк»</span>
                </li>
                <li>
                  <span>БИК:</span> <span>046015207</span>
                </li>
                <li>
                  <span>Корр. счет:</span> <span>30101810500000000207</span>
                </li>
                <li>
                  <span>Расчетный счет:</span> <span>40702810126240001830</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.mapColumn}>
            <div className={styles.mapWrapper}>
              <YandexMap address="РФ, 353207, Краснодарский край, Динской район, поселок Агроном, улица Светлая 1Б/1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
