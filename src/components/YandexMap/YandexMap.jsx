import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  const defaultState = {
    center: [45.129909, 39.189993],
    zoom: 16,
  };

  const placemarkProperties = {
    balloonContentHeader: "ООО «Продмаркет»",
    balloonContentBody: `
      <p>Замороженные продукты питания</p>
      <p>Адрес: ул. Светлая 1Б/1, пос. Агроном, Динской район, Краснодарский край</p>
      <p>Телефон: <a href="tel:+79183338558">+7 (918) 333-85-58</a></p>
      <p>Email: <a href="mailto:Prodmarket23@mail.ru">Prodmarket23@mail.ru</a></p>
    `,
    balloonContentFooter:
      "<a href='https://yandex.ru/maps/?rtext=~45.041275,39.137725' target='_blank'>Построить маршрут</a>",
    hintContent: "ООО «Продмаркет»",
  };

  const placemarkOptions = {
    preset: "islands#blueFoodIcon",
  };

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_API_KEY }}>
      <Map defaultState={defaultState} width="100%" height="400px">
        <Placemark
          geometry={[45.129909, 39.189993]}
          properties={placemarkProperties}
          options={placemarkOptions}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
