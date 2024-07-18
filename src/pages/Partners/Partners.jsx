import {
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  Briefcase,
  Coffee,
  Hotel,
  ShoppingBag,
  Utensils,
  Building,
} from "lucide-react";
import styles from "./partners.module.css";

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Партнерская программа</h2>
        <p className={styles.subtitle}>
          Развивайте свой бизнес вместе с Продмаркет
        </p>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <ShieldCheck className={styles.icon} />
            <h3>Надежность</h3>
            <p>Гарантируем стабильные поставки и высокое качество продукции</p>
          </div>
          <div className={styles.benefitCard}>
            <TrendingUp className={styles.icon} />
            <h3>Рост</h3>
            <p>
              Помогаем нашим партнерам расширять бизнес и увеличивать прибыль
            </p>
          </div>
          <div className={styles.benefitCard}>
            <Truck className={styles.icon} />
            <h3>Логистика</h3>
            <p>Оперативная доставка по всему Краснодарскому краю</p>
          </div>
          <div className={styles.benefitCard}>
            <ShoppingBag className={styles.icon} />
            <h3>Выгодные условия</h3>
            <p>
              Гибкая система скидок и индивидуальный подход к каждому партнеру
            </p>
          </div>
        </div>

        <div className={styles.partnerTypesSection}>
          <h3>Кому мы предлагаем сотрудничество:</h3>
          <div className={styles.partnerTypes}>
            <div className={styles.partnerType}>
              <ShoppingBag className={styles.icon} />
              <span>Розничным магазинам</span>
            </div>
            <div className={styles.partnerType}>
              <Briefcase className={styles.icon} />
              <span>Сетевым супермаркетам</span>
            </div>
            <div className={styles.partnerType}>
              <Coffee className={styles.icon} />
              <span>Ресторанам и кафе</span>
            </div>
            <div className={styles.partnerType}>
              <Hotel className={styles.icon} />
              <span>Отелям и гостиницам</span>
            </div>
            <div className={styles.partnerType}>
              <Users className={styles.icon} />
              <span>Оптовым покупателям</span>
            </div>
            <div className={styles.partnerType}>
              <Utensils className={styles.icon} />
              <span>Точкам общепита</span>
            </div>
            <div className={styles.partnerType}>
              <Building className={styles.icon} />
              <span>Столовым</span>
            </div>
          </div>
        </div>

        <div className={styles.partnershipProcess}>
          <h3>Как начать сотрудничество:</h3>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <p>Оставьте заявку на сайте или свяжитесь с нами</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <p>Обсудите условия с нашим менеджером</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <p>Заключите договор</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <p>Получите доступ к полному ассортименту продукции</p>
            </div>
          </div>
        </div>
        <button className={styles.ctaButton}>
          <a href="tel:+79183338558">Позвонить и стать партнером</a>
        </button>
      </div>
    </section>
  );
};

export default Partners;
