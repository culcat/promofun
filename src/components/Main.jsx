import React ,{useState,useEffect}from 'react'
// import axios from 'axios';
import data from '../response_1694287689852.json'
import logo from '../images/logo_3fca28708d6747d60f1d72dcb370803d.jpeg'

// Создайте компонент для попапа
function Popup({ jsonData, isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
    <>

        <div>


            
              <div className="popup action-popup__content actions-grid-item">
                <div className="popup-content action-popup__content"><button onClick={onClose}>


                                                  <svg width="24" height="24">
                                    <use href="#icon-close"></use>
                                </svg>
                            </button>
                       
                                        <div className="actions-grid-item__content"  >
                                    
                        <div className="actions-grid-item__main" >
                            
                            <div className="actions-grid-item__brand " >
                           
                                <img className="actions-grid-item__logo " src={jsonData.logo}/>
                                <div className="actions-grid-item__brand-info">
                                    <h4 className="actions-grid-item__name ">{jsonData.company}</h4>
                                    <p className="actions-grid-item__category ">{jsonData.category}</p>
                                </div>
                            </div>
                            <span className="actions-grid-item__deadline ">{jsonData.deadline}                                    </span>
                        </div>

                        <p className="actions-grid-item__info actions-grid-item__info--bold actions-grid-item__info--popup popup-content">
                        {jsonData.name}                        </p>

                        <p className="actions-grid-item__details ">
                            {jsonData.info}                                                 </p>

                        <p className="actions-grid-item__details ">
                           {jsonData.name}                 </p>

<div className="actions-grid-item__promo">
                                <div className="actions-grid-item-promo">
                                    <div className="actions-grid-item-promo__head">
                                        <strong className="actions-grid-item-promo__caption">Твой промокод</strong>
                                        <button className="actions-grid-item-promo__copy js-copy-promocode"
                                                data-clipboard-text={jsonData.promo}>
                                            <svg width="18" height="20">
                                                <use href="#icon-copy-promocode"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <strong className="actions-grid-item-promo__code">{jsonData.promo}</strong>
                                </div>
                            </div>
                        
                        
                                                                                                                
                            <a className="actions-grid-item__button actions-grid-item__button--popup"
                               target="_blank"
                               href={jsonData.url}>
                                Получить выгоду
                            </a>
                                            </div>
                </div> </div>
              
            
         </div>
             
    </>
    );
  }
  
  

function Main(){

    const [isPopupOpen, setPopupOpen] = useState(false);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     // Axios GET request
    //     axios.get('http://192.168.1.92:8822/api')
    //       .then(response => {
    //         setData(response.data); // Update state with the fetched data
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
           
    //       });
    //   }, []);

   
    const [filter, setFilter] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const handleFilterClick = (type) => {
        if (activeButton === type) {
          // Если кнопка уже активна, сбрасываем фильтр и класс
          setFilter(null);
          setActiveButton(null);
        } else {
          // Иначе устанавливаем фильтр и класс
          setFilter(type);
          setActiveButton(type);
        }
      };
    
      const filteredData = filter ? data.filter(item => item.category === filter) : data;
      const [selectedCard, setSelectedCard] = useState(null);

      const togglePopup = (index) => {
        setSelectedCard(index);
      };
    
      const closePopup = () => {
        setSelectedCard(null);
      };

    // const togglePopup = () => {
    //   setPopupOpen(!isPopupOpen);
    //   console.log(111);
    // };
    return (
        <div>
        
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no"
  />
  <meta name="format-detection" content="telephone=no" />
  <meta name="msapplication-config" content="/img/browserconfig.xml" />
  <meta name="theme-color" content="#ffffff" />
  <meta
    property="og:title"
    content="Актуальные промокоды скидки купоны акции 2023 — самые выгодные скидки и промокоды!"
  />
  <meta name="og:url" content="https://promo.getblogger.ru/promo" />
  <meta
    name="og:image"
    content="https://promo.getblogger.ru/files/logo/logo_3fca28708d6747d60f1d72dcb370803d.jpg"
  />
  <meta name="csrf-param" content="_csrf-promo" />
  <meta
    name="csrf-token"
    content="lIPXEyG314e7TlO9gRAeI4dKXO1O09kpZYHoy8HlNz-n97JfZcTkw_kqBonOJG1p6x89nTeL6GAmub7mudxecQ=="
  />

  <di className="actions-page" data-theme="light-02">
    <div className="popup-wrap" data-popup="filters">
      <div className="popup-wrap__content">
        <form className="filters-popup" action="promo.html" method="get">
          <div className="filters-popup__head filters-popup-head">
            <h3 className="filters-popup-head__title">Фильтры</h3>
            <button
              className="filters-popup-head__close"
              type="button"
              data-close-popup=""
            >
              <svg width={24} height={24}>
                <use href="#icon-close" />
              </svg>
            </button>
          </div>
          <div className="filters-popup__content">
            <div className="filters-popup-fields">
              <h4 className="filters-popup-fields__title">Сортировка</h4>
              <div className="filters-inputs" data-filter-inputs="">
                <div className="filters-inputs__item">
                  <input
                    id="sort-popular"
                    type="radio"
                    name="sorting"
                    defaultValue="popular"
                    defaultChecked=""
                  />
                  <label htmlFor="sort-popular">Сначала популярные</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="sort-new"
                    type="radio"
                    name="sorting"
                    defaultValue="new"
                  />
                  <label htmlFor="sort-new">Сначала новые</label>
                </div>
              </div>
            </div>
            <div className="filters-popup-fields">
              <h4 className="filters-popup-fields__title">Категории</h4>
              <div className="filters-inputs" data-filter-inputs="">
                <div className="filters-inputs__item">
                  <input
                    id="cat_all"
                    type="checkbox"
                    name="categories"
                    defaultValue=""
                    defaultChecked=""
                    data-select-all="all"
                  />
                  <label htmlFor="cat_all">Все</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_1"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={1}
                  />
                  <label htmlFor="cat_1">Онлайн-сервисы</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_2"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={2}
                  />
                  <label htmlFor="cat_2">Финансовые продукты</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_3"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={3}
                  />
                  <label htmlFor="cat_3">Еда и напитки</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_4"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={4}
                  />
                  <label htmlFor="cat_4">Маркетплейсы</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_5"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={5}
                  />
                  <label htmlFor="cat_5">Красота и здоровье</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_6"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={6}
                  />
                  <label htmlFor="cat_6">Мода</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_7"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={7}
                  />
                  <label htmlFor="cat_7">Путешествия</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_10"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={10}
                  />
                  <label htmlFor="cat_10">Спорт</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_11"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={11}
                  />
                  <label htmlFor="cat_11">Дом и ремонт</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="cat_12"
                    type="checkbox"
                    name="categories[]"
                    defaultValue={12}
                  />
                  <label htmlFor="cat_12">Товары для животных</label>
                </div>
              </div>
            </div>
            <div className="filters-popup-fields">
              <h4 className="filters-popup-fields__title">Бренды</h4>
              <div className="filters-inputs" data-filter-inputs="">
                <div className="filters-inputs__item">
                  <input
                    id="brands_all"
                    type="checkbox"
                    name="brands"
                    defaultValue=""
                    defaultChecked=""
                    data-select-all="all"
                  />
                  <label htmlFor="brands_all">Все</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="brands_42664"
                    type="checkbox"
                    name="brands[]"
                    defaultValue={42664}
                  />
                  <label htmlFor="brands_42664">СберМаркет</label>
                </div>
                <div className="filters-inputs__item">
                  <input
                    id="brands_46512"
                    type="checkbox"
                    name="brands[]"
                    defaultValue={46512}
                  />
                  <label htmlFor="brands_46512">ЛЭТУАЛЬ</label>
                </div>
              </div>
            </div>
          </div>
          <div className="filters-popup__buttons">
            <div className="filters-popup-buttons">
              <div className="filters-popup-buttons__item">
                <button
                  className="filters-popup-buttons__button filters-popup-buttons__button--reset"
                  id="reset_filter"
                  type="reset"
                >
                  Сбросить всё
                </button>
              </div>
              <div className="filters-popup-buttons__item">
                <button
                  className="filters-popup-buttons__button filters-popup-buttons__button--submit"
                  type="submit"
                >
                  Применить
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
   
   
    <div className="actions-head">
      <div className="actions-head__title">
        <img
          className="actions-head__logo"
          src={logo}
        />
        <h1 className="actions-head__caption">
          Актуальные промокоды скидки купоны акции 2023
        </h1>
      </div>
      <div className="actions-head__social">
        <span>Больше акций тут:</span>
        <div className="actions-footer-socials actions-footer-socials--head">
          <a
            className="actions-footer-socials__link"
            href="https://t.me/Blackfive50"
            target="_blank"
            onclick="ym(93807298,'reachGoal','telegram');"
          >
            <svg width={24} height={24}>
              <use href="#icon-social-telegram" />
            </svg>
          </a>
        </div>
      </div>
      <button
        className="actions-head__button actions-head__button--filter"
        data-toggle-popup="filters"
      >
        <svg width={18} height={12}>
          <use href="#icon-filter" />
        </svg>
      </button>
      <button
        className="actions-head__button actions-head__button--search"
        data-toggle-search=""
      >
        <svg width={21} height={21}>
          <use href="#icon-search" />
        </svg>
      </button>
    </div>
    <div className="actions-content">
        <div
          className="actions-stripe scrollyeah"
          data-shadows="false"
          data-disableiffit="true"
        >
            <div className="scrollyeah__shaft">
          <div className="actions-stripe__item actions-stripe__item--filter">
            <button
              type="button"
              className="actions-stripe-button"
              data-toggle-popup="filters"
            >
              <div className="actions-stripe-button__icon">
                <svg width={18} height={12}>
                  <use href="#icon-filter" />
                </svg>
              </div>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="brands[]"
              type="submit"
              value={42664}
              className="actions-stripe-button"
              onClick={() => handleFilterClick('СберМаркет')}

            >
              <div
                className="actions-stripe-button__image"
                style={{
                  backgroundImage:
                    "url(https://getblogger-messenger.storage.yandexcloud.net/ygbp_offer_logo_e085fd6f09a5bdeed644ca8a97d42907.jpeg)"
                }}
              />
              <span className="actions-stripe-button__amount">13 </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="brands[]"
              type="submit"
              value={46512}
              className="actions-stripe-button"
              onClick={() => handleFilterClick('ЛЭТУАЛЬ')}

            >
              <div
                className="actions-stripe-button__image"
                style={{
                  backgroundImage:
                    "url(https://getblogger-messenger.storage.yandexcloud.net/ygbp_offer_logo_dd1da954e61e4c9b40336319e1e5c5ba.jpg)"
                }}
              />
              <span className="actions-stripe-button__amount">5 </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              value={1}
              onClick={() => handleFilterClick('Онлайн-сервисы')}
            className={activeButton === 'Онлайн-сервисы' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
            
            >
              <span className="actions-stripe-button__title">
                Онлайн-сервисы{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={2}
              onClick={() => handleFilterClick('Финансовые продукты')}
              className={activeButton === 'Финансовые продукты' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">
                Финансовые продукты{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={3}
              onClick={() => handleFilterClick('Еда и напитки')}
              className={activeButton === 'Еда и напитки' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">
                Еда и напитки{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={4}
              onClick={() => handleFilterClick('Маркетплейсы')} 
              className={activeButton === 'Маркетплейсы' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">
                Маркетплейсы{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={5}
              onClick={() => handleFilterClick('Красота и здоровье')}
              className={activeButton === 'Красота и здоровье' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">
                Красота и здоровье{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={6}
              onClick={() => handleFilterClick('Мода')} 
              className={activeButton === 'Мода' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">Мода </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={7}
              onClick={() => handleFilterClick('Путешествия')} 
              className={activeButton === 'Путешествия' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">Путешествия </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              onClick={() => handleFilterClick('Спорт')} 
              value={10}
              className={activeButton === 'Спорт' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">Спорт </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              onClick={() => handleFilterClick('Дом и ремонт')} 
              value={11}
              className={activeButton === 'Дом и ремонт' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">
                Дом и ремонт{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={12}
              onClick={() => handleFilterClick('Товары для животных')} 
              className={activeButton === 'Товары для животных' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
              >
              <span className="actions-stripe-button__title">
                Товары для животных{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item actions-stripe__item--search">
            <button
              type="button"
              className="actions-stripe-button"
              data-toggle-search=""
            >
              <div className="actions-stripe-button__icon">
                <svg width={21} height={21}>
                  <use href="#icon-search" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        </div>
      <form className="actions-search" action="promo.html" method="get">
        <input
          className="actions-search__input"
          name="search"
          defaultValue=""
          type="text"
          autoComplete="off"
          placeholder="Поиск"
        />
        <button
          className="actions-search__button actions-search__button--close"
          type="button"
          data-close-search=""
        >
          <svg width={8} height={14}>
            <use href="#icon-close-search" />
          </svg>
        </button>
        <button
          className="actions-search__button actions-search__button--search"
          type="submit"
        >
          <svg width={18} height={18}>
            <use href="#icon-search" />
          </svg>
        </button>
        <button
          className="actions-search__button actions-search__button--reset"
          id="reset_search"
          type="reset"
        >
          <svg width={21} height={21}>
            <use href="#icon-close" />
          </svg>
        </button>
      </form>
      
      <><div className="summary" /><div className="actions-grid">
      {filteredData.map((jsonData, index) => (

              <div className="actions-grid__col">
            
                  <div className="actions-grid-item">
                      <div
                          className="actions-grid-item__image"
                          style={{ backgroundImage: `url(${jsonData.img})` }}
                      ></div>
                      {/* <img src={jsonData.img} ClassName="actions-grid-item__image" /> */}
                      <div className="actions-grid-item__content">
                          <div className="actions-grid-item__main">
                              <div className="actions-grid-item__brand">
                                  
                                  <img className="actions-grid-item__logo" src={jsonData.logo} />
                                  <div className="actions-grid-item__brand-info">
                                      <h4 className="actions-grid-item__name">{jsonData.company}</h4>
                                      <p className="actions-grid-item__category">
                                          {jsonData.category}
                                      </p>
                                  </div>
                              </div>
                              <span className="actions-grid-item__deadline">
                                  {jsonData.deadline}{" "}
                              </span>
                          </div>
                          <p className="actions-grid-item__info">
                              {jsonData.name}
                          </p>
                          <button
                              className="actions-grid-item__button"
                              data-toggle-popup={932488}
                              onClick={() => togglePopup(index)
                              }                          >
                              Узнать больше
                          </button>
                      </div>
                  </div>
             </div>
         ))}  </div></>
            <Popup
        jsonData={filteredData[selectedCard]}
        isOpen={selectedCard !== null}
        onClose={closePopup}
      />
    </div>

    
    
           
        
   
    <footer className="actions-footer">
      <div className="actions-footer__row actions-footer__row--first">
        <div className="actions-footer-message">
          <div className="actions-footer-message__text actions-footer-message__text--left">
            <p>А ещё есть акции?</p>
          </div>
          <div className="actions-footer-message__userpic">
            <svg width={24} height={24}>
              <use href="#icon-user" />
            </svg>
          </div>
        </div>
      </div>
      <div className="actions-footer__row actions-footer__row--last">
        <div className="actions-footer-message">
          <div
            className="actions-footer-message__userpic"
            style={{ backgroundImage: `url(${logo})` }}
          />
          <div className="actions-footer-message__text actions-footer-message__text--right">
            <h4>Актуальные промокоды скидки купоны акции 2023</h4>
            <p>Больше акций и предложений в моих соцсетях</p>
            <div className="actions-footer-socials">
              <a
                className="actions-footer-socials__link"
                href="https://t.me/Blackfive50"
                target="_blank"
                onclick="ym(93807298,'reachGoal','telegram');"
              >
                <svg width={24} height={24}>
                  <use href="#icon-social-telegram" />
                </svg>
                
              </a>
            </div>
          </div>
        </div>
        </div>
    </footer>
    </di>
  
    </div>
  );
};

export default Main;