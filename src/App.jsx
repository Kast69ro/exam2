import One from "./components/nav-button";
import More from "./components/more-card";
import Big from "./components/bigCard";
import Three from "./components/number-cards";
import Four from "./components/four";
import Two from "./components/anouther-btn";
import AccordionUsage from "./components/accordion";
import "./index.css";
import logo from "@/assets/INNOMA.VC.svg";
import foto1 from "@/assets/kisspng-competitor-analysis-market-research-marketing-quan-5b102810d85456 1.png";
import foto2 from "@/assets/rocket 1.png";
import num1 from "@/assets/01.svg";
import num2 from "@/assets/02.svg";
import num3 from "@/assets/03.svg";
import num4 from "@/assets/04.svg";
import num5 from "@/assets/05.svg";
import num6 from "@/assets/06.svg";
import fatima from "@/assets/Ellipse 527.png";
import foto3 from "@/assets/Group 764.svg";
import foto4 from "@/assets/_300.svg";
import foto5 from "@/assets/73.svg";
import foto6 from "@/assets/Group 661.svg";
import foto7 from "@/assets/Vector (9).svg";
import foto8 from "@/assets/Vector (10).svg";
import foto9 from "@/assets/Group 839.png";
import foto10 from "@/assets/Group 812.svg";
import foto11 from "@/assets/Vector (1).png";
import foto12 from "@/assets/Vector (2).png";
import foto13 from "@/assets/Vector (3).png";
import foto14 from "@/assets/Снимок экрана 2022-11-14 в 5.45 1.png";
import foto15 from "@/assets/Group 841.png";
import foto16 from "@/assets/one.png";
import foto17 from "@/assets/two.png";
import foto18 from "@/assets/three.png";
import foto19 from "@/assets/four.png";
import foto20 from "@/assets/five.png";
import foto21 from "@/assets/Ellipse 545.png";
import foto22 from "@/assets/Ellipse 546.png";
import foto23 from "@/assets/Ellipse 548.png";
import foto24 from "@/assets/Ellipse 544.png";
import foto25 from "@/assets/card1.png";
import foto26 from "@/assets/card2.png";
import foto27 from "@/assets/card3.png";
import foto28 from "@/assets/Group 664.png";
import foto29 from "@/assets/Group 665.png";

export default function App() {
  return (
    <>
      <div>
        <header>
          <nav>
            <img src={logo} alt="" />
            <div className="divNav">
              <p>Кто мы?</p>
              <p>Услуги</p>
              <p>Акселератор</p>
              <p>Новости</p>
            </div>
            <One>{["Войти"]}</One>
          </nav>
          <div className="headerDiv">
            <div className="miniHeaderDiv">
              <h1>
                Запустите <br />
                <span>Запустите технологический IT-бизнес</span> <br />
                на международных рынках
              </h1>
              <h3>Открыт набор заявок на акселератор</h3>
              <Two>{["Подать заявку"]}</Two>
            </div>
          </div>
        </header>

        <section>
          <h2 className="first">Наши услуги</h2>
          <div className="yslygi">
            <div className="miniYslygi">
              <h3 className="second">Аналитические исследования</h3>
              <p className="thrid">
                Одним из наших ключевых направлений является анализ
                технологических трендов на международных рынках. Мы проводим
                анализ на основе публичных исследований McKinsey, BCG, PWC,
                Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S,
                PitchBook а также агрегируем и анализируем данные из открытых
                международных источников патенты, медиа, научные публикации
              </p>
              <One>{["Узнать подробнее"]}</One>
            </div>
            <img src={foto1} alt="" />
          </div>
          <div className="yslygi">
            <img src={foto2} alt="" />
            <div className="miniYslygi">
              <h3 className="second">Онлайн акселератор для IT бизнеса</h3>
              <p className="thrid">
                Онлайн программа аскелерации IT бизнеса позволит вашей команде
                открыть новые горизонты и возможности для бизнеса на глобальных
                рынках. В результате программы вы получите возможность
                презентовать свой проект для международных инвесторов и
                локальных партнеров
              </p>
              <One>{["Узнать подробнее"]}</One>
            </div>
          </div>
        </section>

        <section>
          <h2 className="first">Для кого мы?</h2>

          <div className="cards">
            <Three>
              {[
                num1,
                "IT проекты на стадии идеи",
                "Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт",
              ]}
            </Three>
            <Three>
              {[
                num2,
                "Инновационный бизнес",
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес",
              ]}
            </Three>
            <Three>
              {[
                num3,
                "Корпорации",
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес",
              ]}
            </Three>
          </div>
        </section>

        <section>
          <div className="bigTrade">
            <div className="trade">
              <h2 className="green">
                Научитесь исследовать иностранные рынки <br />и откройте новые
                возможности для своего бизнеса
              </h2>
              <p className="white">
                Наша команда поможет вам изучить рынки Ближнего Востока, Азии,
                Латинской Америки и Африки
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="main">
            <h2 className="first">С какими рынками мы работаем?</h2>

            <div className="select">
              <Four>
                {[
                  "Ближний восток",
                  "rgba(136, 187, 216, 1)",
                  "#fff",
                  "1px solid rgba(207, 221, 235, 1)",
                ]}
              </Four>
              <Four>
                {[
                  "Азия",
                  "rgba(238, 241, 244, 1)",
                  "rgba(72, 72, 72, 1)",
                  "1px solid rgba(207, 221, 235, 1)",
                ]}
              </Four>
              <Four>
                {[
                  "Латинская Америка",
                  "rgba(238, 241, 244, 1)",
                  "rgba(72, 72, 72, 1)",
                  "1px solid rgba(207, 221, 235, 1)",
                ]}
              </Four>
              <Four>
                {[
                  "Африка",
                  "rgba(238, 241, 244, 1)",
                  "rgba(72, 72, 72, 1)",
                  "",
                ]}
              </Four>
            </div>

            <div className="big">
              <div className="mena">
                <h2 className="txt">
                  Чем интересен <br />
                  <span>Рынок MENA:</span>
                </h2>
                <p>
                  ОАЭ, Саудовская Аравия, <br />
                  Израиль, Оман, Бахрейн, Катар, <br />
                  Тунис, Йемен, Египет, Алжир
                </p>
                <Two>{["Выйти на рынок"]}</Two>
                <div className="about">
                  <img src={fatima} alt="" />
                  <div>
                    <h4>Фатима </h4>
                    <p>Менеджер по MENA</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mores">
                  <More>{[foto3, "Инвестиции pre-seed, seed", ""]}</More>
                  <More>{[foto4, "Акселераторов, инкубаторов", ""]}</More>
                  <More>{[foto5, "Венчурных фонда", ""]}</More>
                  <More>
                    {[
                      foto6,
                      "Скачать отчетпо рынку MENA",
                      "rgba(17, 120, 178, 1)",
                    ]}
                  </More>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className="first">Об акселераторе IT бизнеса</h2>
            <p className="text">
              Программа акселератора расчитана на 8 недель интенсивного онлайн
              курса с вебинарами приглашенных <br /> экспертов по международным
              рынкам, разборами ваших идей и проектов{" "}
            </p>
          </div>
          <div className="cards">
            <Three>{[num3, "Месяца обучения", ""]}</Three>
            <Three>{[foto7, "Приглашенные эксперты", ""]}</Three>
            <Three>{[foto8, "Персональный менеджер", ""]}</Three>
          </div>
        </section>

        <section className="play">
          <div className="pley">
            <h3>Об акселерационной программе</h3>
            <img src={foto9} alt="" />
          </div>
        </section>
        <section className="one">
          <h2 className="first" style={{ margin: "0", padding: "30px" }}>
            Программа акселератора
          </h2>
          <AccordionUsage></AccordionUsage>
          <Two>{["Получить полную программу"]}</Two>
        </section>

        <section>
          <div className="hog">
            <div className="miniHog">
              <h2 className="thrd">
                Попадите на радары <br /> инвесторов и партнеров
              </h2>
              <p>
                В результате прохождения обучения мы создадим профили вашей
                компании на всех международных скаутинговых площадках
              </p>
              <One>{["Записаться в акселератор"]}</One>
            </div>
            <img className="fot" src={foto10} alt="" />
          </div>
        </section>
        <section>
          <h2 className="first">Что вы получите в результате?</h2>
          <div className="cards">
            <Three>
              {[
                num1,
                "IT проекты на стадии идеи",
                "Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт",
              ]}
            </Three>
            <Three>
              {[
                num2,
                "Инновационный бизнес",
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес",
              ]}
            </Three>
            <Three>
              {[
                num3,
                "Корпорации",
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес",
              ]}
            </Three>
          </div>
          <div className="cards">
            <Three>
              {[
                num4,
                "IT проекты на стадии идеи",
                "Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт",
              ]}
            </Three>
            <Three>
              {[
                num5,
                "Инновационный бизнес",
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес",
              ]}
            </Three>
            <Three>
              {[
                num6,
                "Корпорации",
                "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес",
              ]}
            </Three>
          </div>
        </section>

        <section>
          <h2 className="first">Стоимость</h2>
          <div className="cards">
            <Big>
              {[
                foto11,
                "Анализ международных рынков ",
                <Two>{["Оставить заявку"]}</Two>,
              ]}
            </Big>
            <Big>
              {[
                foto12,
                "Упаковка стартапа под локальные рынки ",
                <Two>{["Оставить заявку"]}</Two>,
              ]}
            </Big>
            <Big>
              {[
                foto13,
                "Акселератор вашего бизнеса ",
                <Two>{["Оставить заявку"]}</Two>,
              ]}
            </Big>
          </div>
        </section>

        <section>
          <h2 className="first">Кто мы?</h2>
          <div className="bigJus">
            <img src={foto14} alt="" />
            <div className="jus">
              <h4>
                INNOMA.VC - Международное аналитическое агентство по запуску IT
                бизнеса на локальных рынках регионов Азии, Ближнего Востока,
                Латинской Америки, Африки. <br /> <br />
                Наша команда состоит из профессионалов своего дела и основной
                нашей целью является помощь IT компаниям получить необходимые
                знания и пакеты документов, чтобы успешно запустить свой продукт
                на международных рынках.
              </h4>
            </div>
          </div>
        </section>
        <section>
          <div className="bigJus">
            <img src={foto15} alt="" />
            <div className="jus">
              <h4>
                Всем привет! <br /> Меня зовут Роман. Последние 6 лет я являюсь
                частью инновационной экосистемы СНГ, прошел путь от проектного
                менеджера до руководителя продукта по автоматизированному
                скаутингу и скорингу стартапов. За 6 лет работы я увидел
                множество ошибок и отсутствие ориентации акселерационных
                программ под запросы стартапов. Все акселераторы выполнялись
                ради акселераторв и выполнения КПЭ.
              </h4>
              <div>
                <h4>Роман Гайн</h4>
                <h5>Основатель INNOMA.VC</h5>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="slide">
            <img src={foto16} alt="" />
            <img src={foto17} alt="" />
            <img src={foto18} alt="" />
            <img src={foto19} alt="" />
            <img src={foto20} alt="" />
          </div>
        </section>

        <section>
          <div className="mens">
            <div className="men">
              <img src={foto21} alt="" />
              <h2>Юрий Ким</h2>
              <p className="texT">
                Проведение исследования целевой аудитории позволит сформировать
                Product market fit
              </p>
            </div>
            <div className="men">
              <img src={foto22} alt="" />
              <h2>Эшли Абрамс</h2>
              <p className="texT">
                Проведение исследования целевой аудитории позволит сформировать
                Product market fit
              </p>
            </div>
            <div className="men">
              <img src={foto23} alt="" />
              <h2>Фатими Юсуф</h2>
              <p className="texT">
                Проведение исследования целевой аудитории позволит сформировать
                Product market fit
              </p>
            </div>
            <div className="men">
              <img src={foto24} alt="" />
              <h2>Майкл Донован</h2>
              <p className="texT">
                Проведение исследования целевой аудитории позволит сформировать
                Product market fit
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bigTrade">
            <div className="trade">
              <h2 className="white bel">
                Мы создаем международное сообщество экспертов и партнеров
              </h2>
              <p className="white">
                Если вы или ваш бизнес может быть полезен IT командам при выходе
                на международные рынки, приглашем вас стать нашим партнером
              </p>
              <Two>{["Стать партнером"]}</Two>
            </div>
          </div>
        </section>

        <section>
          <div className="mens">
            <div className="moreCard">
              <img src={foto25} alt="" />
              <h2>Новый отчет по MENA</h2>
              <p>
                Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
                раундов, ТОП сферы)
              </p>
              <p>22.11.2022</p>
            </div>
            <div className="moreCard">
              <img src={foto26} alt="" />
              <h2>Новый отчет по MENA</h2>
              <p>
                Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
                раундов, ТОП сферы)
              </p>
              <p>22.11.2022</p>
            </div>
            <div className="moreCard">
              <img src={foto27} alt="" />
              <h2>Новый отчет по MENA</h2>
              <p>
                Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
                раундов, ТОП сферы)
              </p>
              <p>22.11.2022</p>
            </div>
          </div>
        </section>

        <section>
          <div className="maiN">
            <div className="minMain">
           <div>
               <h2>Остались вопросы?</h2>
              <p>Оставьте заявку и наша команда свяжется с вами</p>
           </div>
           <div className="messenger">
            <div className="mess">
              <img src={foto29} alt="" />
              <h4>telegram</h4>
            </div>
            <div className="mess">
              <img src={foto28} alt="" />
              <h4>Whatsapp</h4>
            </div>

           </div>

            </div>
            <div className="form">
              <p>Name</p>
              <p>Email</p>
              <p>Number</p>
              <One>{['Оставить заявку']}</One>
            </div>
          </div>
        </section>

        <footer>
           <div className="foot">
             <img src={logo} alt="" />
            <div className="loop">
              <p>Кто мы?</p>
              <p>Услуги</p>
              <p>Акселератор</p>
              <p>Новости</p>
            </div>
            <div>
              <p>Dubai, Single Business Tower 1503, Business Bay</p> <br />Sales@innoma.vc
            </div>
           </div>
          
        </footer>
      </div>
    </>
  );
}
