import Image from "next/image";
import Logo from "@/images/logo.png";
import image1 from "@/images/image1.jpg";
import image2 from "@/images/image2.webp";
import { ListItem } from "@/types/ListItem";
import Head from "next/head";

interface HomeProps {
  data: ListItem[];
}

export async function getServerSideProps() {
  const data = [
    {
      id: 1,
      title: "Круглосуточность",
      text: "Наша команда работает без перерывов, обеспечивая помощь в любое время суток",
    },
    {
      id: 2,
      title: "Экономия времени.",
      text: "Не нужно ехать в автосервис – мы сами приедем к вам.",
    },
    {
      id: 3,
      title: "Оперативность.",
      text: " Прибытие мастера в среднем занимает 30-60 минут, в зависимости от местоположения клиента.",
    },
    {
      id: 4,
      title: "Широкий спектр услуг.",
      text: "Мы выполняем все работы, связанные с ремонтом и заменой шин.",
    },
    {
      id: 5,
      title: "Качество и гарантия.",
      text: "Используем профессиональное оборудование и качественные материалы.",
    },
  ];
  return { props: { data: data } };
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Выездной шиномонтаж в Минске | Круглосуточный шиномонтаж</title>
        <meta
          name="description"
          content="Выездной или передвижной шиномонтаж – это мобильная мастерская на базе специального автомобиля. Оснащённый всем необходимым оборудованием. Звоните"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col gap-[30px]">
        <header className="flex md:flex-row flex-col items-center justify-between gap-[10px] bg-headerBg md:px-[45px] px-[20px] py-[20px]">
          <Image src={Logo} width={180} height={180} alt="Логотип" />
          <h1 className="text-center md:text-[40px] text-[30px] font-bold">
            Выездной шиномонтаж в Минске
          </h1>
          <div>
            <div>
              <p className="text-[18px] font-medium">
                Телефон: <a href="tel:375292922929">+375 (29) 292-29-29</a>
              </p>
            </div>
            <div>
              <p className="text-[18px] font-medium">
                Адрес: г.Минск, ул. Лошицкая 9Б
              </p>
            </div>
          </div>
        </header>
        <main className="md:px-[45px] px-[20px]">
          <p className="text-[18px] font-medium">
            Ситуации на дороге бывают разные: прокол, порез шины, повреждение
            диска или необходимость экстренной замены колеса. Что делать, если
            время поджимает, а поблизости нет шиномонтажа? Лучший выход –
            выездной шиномонтаж. Мы предлагаем удобный, мобильный сервис для
            автовладельцев, обеспечивая оперативную помощь в любой точке Минска
            и за его пределами.
          </p>
          <div>
            <h2 className="w-fit text-[32px] font-bold p-[6px] border-[1px] rounded-lg my-[10px]">
              Что такое выездной шиномонтаж?
            </h2>
            <p className="text-[18px] font-medium">
              Выездной или передвижной шиномонтаж – это мобильная мастерская на
              базе специального автомобиля. Оснащённый всем необходимым
              оборудованием, наш транспорт позволяет:
            </p>
            <ul className="list-disc ml-[30px]">
              <li>заменить шины, независимо от места нахождения автомобиля;</li>
              <li>устранить проколы и порезы прямо на месте;</li>
              <li>провести балансировку колёс;</li>
              <li>выполнить сезонную замену резины;</li>
              <li>
                предоставить другие услуги, включая диагностику и подкачку шин.
              </li>
            </ul>
          </div>
          <div className="flex justify-center my-[20px]">
            <Image
              src={image1}
              width={800}
              height={800}
              alt="Шиномонтаж"
              className="rounded-[20px]"
            />
          </div>
          <div>
            <p className="text-[18px] font-medium">
              Наш сервис доступен 24 часа в сутки, включая праздничные и
              выходные дни. Мы работаем с легковыми автомобилями,
              внедорожниками, микроавтобусами и даже грузовым транспортом.
            </p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] justify-items-center my-6">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-blue-950 rounded-[20px] w-full"
                >
                  <h3 className="text-[22px] font-semibold">{item.title}</h3>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="w-fit text-[32px] font-bold p-[6px] border-[1px] rounded-lg my-[10px]">
              Когда нужен выездной шиномонтаж?
            </h2>
            <p className="text-[18px] font-medium">
              Вы можете вызвать нас в следующих случаях:
            </p>
            <ul className="list-disc ml-[30px]">
              <li>
                Прокол или порез шины, который невозможно устранить
                самостоятельно.
              </li>
              <li>Колесо спустило, а запаска отсутствует или не подходит.</li>
              <li>Потребовалась срочная балансировка после замены шин.</li>
              <li>Необходима сезонная замена резины.</li>
              <li>Возникли сложности с отворачиванием крепежа или секреток.</li>
            </ul>
          </div>
          <span>
            Мы также предоставляем услуги для грузового транспорта – выездной
            грузовой шиномонтаж помогает поддерживать в рабочем состоянии колёса
            крупногабаритных автомобилей.
          </span>
          <div>
            <p className="text-[18px] font-medium">
              Как вызвать передвижной шиномонтаж? Всё просто:
            </p>
            <ol className="list-decimal ml-[30px]">
              <li>
                Позвоните по телефону, указанному на сайте, или оставьте заявку
                онлайн.
              </li>
              <li>
                Укажите точный адрес или координаты (улица, дом, район, МКАД).
              </li>
              <li>Опишите проблему: прокол, замена, балансировка и т.д.</li>
              <li>Ожидайте прибытия специалиста.</li>
            </ol>
          </div>
          <p className="text-[18px] font-medium">
            Наши мастера приезжают с полным набором оборудования, чтобы
            устранить проблему максимально быстро. Сколько стоит мобильный
            шиномонтаж? Стоимость услуг зависит от сложности работы, типа
            автомобиля и расстояния до места вызова. Однако наши цены прозрачны
            и конкурентоспособны. Мы всегда готовы предложить удобные условия и
            скидки для постоянных клиентов. Узнать точные расценки можно по
            телефону или в разделе «Цены» на сайте.
          </p>
          <div className="flex justify-center my-[20px]">
            <Image
              src={image2}
              width={800}
              height={800}
              alt="Шиномонтаж"
              className="rounded-[20px]"
            />
          </div>

          <div>
            <h2 className="w-fit text-[32px] font-bold p-[6px] border-[1px] rounded-lg my-[10px]">
              Почему выбирают нас?
            </h2>
            <ul>
              <li>
                Профессионализм. Наши специалисты имеют опыт работы с различными
                типами транспортных средств.
              </li>
              <li>
                Современное оборудование. Вся техника соответствует высоким
                стандартам качества.
              </li>
              <li>
                Удобство для клиента. Мы приедем туда, где вы находитесь –
                домой, на работу, в любое другое место.
              </li>
              <li>Гарантия. На все работы предоставляется гарантия.</li>
            </ul>
          </div>
          <div>
            <details>
              <summary>
                1. Можно ли устранить боковой порез шины на месте?
              </summary>
              <p className="text-[18px] font-medium">
                В большинстве случаев да, если повреждение не критическое. Для
                сложных случаев потребуется замена шины.
              </p>
            </details>
            <details>
              <summary>2. Вы обслуживаете только Минск?</summary>
              <p className="text-[18px] font-medium">
                Нет, мы работаем и в Минской области. Уточнить возможность
                выезда в ваш регион можно по телефону.
              </p>
            </details>
            <details>
              <summary>
                3. Сколько времени занимает выездной шиномонтаж?
              </summary>
              <p className="text-[18px] font-medium">
                В среднем, работа занимает от 30 минут до часа, в зависимости от
                сложности задачи.
              </p>
            </details>
          </div>
        </main>
        <footer className="bg-blue-950 md:px-[45px] px-[20px] py-[30px]">
          <div>
            <p className="text-[18px] font-medium">
              Телефон: <a href="tel:375292922929">+375 (29) 292-29-29</a>
            </p>
          </div>
          <div>
            <p className="text-[18px] font-medium">
              Адрес: г.Минск, ул. Лошицкая 9Б
            </p>
          </div>
          <p className="text-[18px] font-medium">
            Позвоните нам прямо сейчас, чтобы заказать выездной шиномонтаж в
            Минске или получить консультацию! Мы гарантируем быстрое и
            качественное выполнение работ. Ваши проблемы с колесами – это наша
            забота!
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
