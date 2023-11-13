import React ,{useState,useEffect,useRef}from 'react'
import axios from 'axios';
// import data from '../response_1694287689852.json'
import logo from '../images/photo_2023-10-02 20.59.39.jpeg'
import tg from '../images/3069742_circle_messenger_round icon_telegram_icon.png'
import usr from '../images/icons8-male-user-50.png'
import close from '../images/cancel.png'
import burger from '../images/burger_line_list_menu_nav_navigation_option_icon_123231.png'
import search from '../images/searchmagnifierinterfacesymbol1_79893.png'
import copy from '../images/icons8-copy-32.png'
import lt from '../images/ygbp_offer_logo_79e92ccf7a94a941624ebb0225378b28.jpeg'
import sm from '../images/ygbp_offer_logo_e085fd6f09a5bdeed644ca8a97d42907.jpeg'
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';

function Popup({ jsonData, isOpen, onClose }) {
  if (!isOpen) return null;

  // Проверяем, есть ли значение jsonData.promo
  const showPromo = jsonData.promo !== undefined && jsonData.promo !== null;

  return (
    <>
      <div>
        <div className="popup ">
          <div className="popup-content ">
            <button className="close action-popup__close" onClick={onClose}>
              <img src={close} width={12} height={12} alt="" />
            </button>
            <div
              class="actions-grid-item__image"
              style={{ backgroundImage: `url(${jsonData.img})` }}
            ></div>
            <div className="actions-grid-item__content">
           
              <div className="actions-grid-item__main">
                <div className="actions-grid-item__brand">
                  <img className="actions-grid-item__logo" src={jsonData.logo} />
                  <div className="actions-grid-item__brand-info">
                    <h4 className="actions-grid-item__name">{jsonData.company}</h4>
                    <p className="actions-grid-item__category">{jsonData.category}</p>
                  </div>
                </div>
                <span className="actions-grid-item__deadline">{jsonData.deadline}</span>
              </div>

              <p className="actions-grid-item__info actions-grid-item__info--bold actions-grid-item__info--popup">
                {jsonData.name}
              </p>

              <p className="actions-grid-item__details">{jsonData.info}</p>

              <p className="actions-grid-item__details">{jsonData.name}</p>

              {showPromo && (
                <div className="actions-grid-item__promo">
                  <div className="actions-grid-item-promo">
                    <div className="actions-grid-item-promo__head">
                      <strong className="actions-grid-item-promo__caption">Твой промокод</strong>
                      <button
                        className="actions-grid-item-promo__copy js-copy-promocode"
                        data-clipboard-text={jsonData.promo}
                      >
                        <img src={copy} alt="" />
                      </button>
                    </div>

                    <strong className="actions-grid-item-promo__code">{jsonData.promo}</strong>
                  </div>
                </div>
              )}

              <a
                className="actions-grid-item__button actions-grid-item__button--popup"
                target="_blank"
                href={jsonData.url}
              >
                Получить выгоду
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  
  





function Main(){
  const [letualCount, setLetualCount] = useState(0);
  const [sberMarketCount, setSberMarketCount] = useState(0);
    const [isFilterOpen,setFilterOpen] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('http://31.31.196.178:8822/api',  { httpsAgent: { rejectUnauthorized: false } })
      .then(response => {
        setData(response.data); 
        const allCards = response.data;
    
        const letualCards = allCards.filter(card => card.company === 'ЛЭТУАЛЬ');
        const sberMarketCards = allCards.filter(card => card.company === 'СберМаркет');
    
        setLetualCount(letualCards.length);
        setSberMarketCount(sberMarketCards.length);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);
    
    // useEffect(() => {
    //   fetch('http://45.155.207.232:12223/api/promo/')
    //     .then(response => response.json())
    //     .then(data => {
    //       setData(data);
    //       const allCards = data;
    
    //       const letualCards = allCards.filter(card => card.company === 'ЛЭТУАЛЬ');
    //       const sberMarketCards = allCards.filter(card => card.company === 'СберМаркет');
    
    //       setLetualCount(letualCards.length);
    //       setSberMarketCount(sberMarketCards.length);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // }, []);
    

    const [ checkbox, setCheckbox ] = useState(false);
    const [ filteredPosts, setFilteredPosts ] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      let filtered = data;
  
  
      if (checkbox) {
        filtered = filtered.filter(n => n.userId === 10);
      }
  
      setFilteredPosts(filtered);
    }, [ checkbox ]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  // Добавьте функцию для обработки клика на кнопке поиска
  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive); // Инвертируем состояние при каждом клике
  };

  // Добавьте функцию для обработки изменения значения инпута (если необходимо)
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleCloseClick = () => {
    setIsSearchActive(false); // Закрываем поле поиска
  };

  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen);
    console.log(setIsFilterPopupOpen);
  };
  
   
  const handleSearchSubmit = () => {
    // Выполняйте запрос к API с использованием значения searchTerm
    // Например, fetch(`API_URL?q=${searchTerm}`)
    // После получения результатов запроса обновите searchResults
  };
    const [filter, setFilter] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    
    const [selectedFilters, setSelectedFilters] = useState([]);


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
    
      // filter ? data.filter(item => item.category === filter) : data;

      const menuRef = useRef(null);
      const [isDragging, setIsDragging] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
    
      const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - menuRef.current.offsetLeft);
        setScrollLeft(menuRef.current.scrollLeft);
      };
    
      const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - menuRef.current.offsetLeft);
        setScrollLeft(menuRef.current.scrollLeft);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
    
      const handleTouchEnd = () => {
        setIsDragging(false);
      };
    
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - menuRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the scroll speed
        menuRef.current.scrollLeft = scrollLeft - walk;
      };
    
      const handleTouchMove = (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const x = e.touches[0].pageX - menuRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the scroll speed
        menuRef.current.scrollLeft = scrollLeft - walk;
        e.preventDefault(); // Prevent the default touch scroll behavior
      };
    
      const [activeFilButton, setActiveFilButtons] = useState([]);


      const handlePopFilterClick = (type) => {
        // Проверяем, есть ли этот фильтр в массиве активных фильтров
        const isActive = activeFilButton.includes(type);
      
        if (isActive) {
          // Если фильтр уже активен, удаляем его из массива
          setActiveFilButtons((prevButtons) =>
            prevButtons.filter((button) => button !== type)
          );
        } else {
          // Если фильтр не активен, добавляем его в массив
          setActiveFilButtons((prevButtons) => [...prevButtons, type]);
        }
      };
      const handleAllFilterClick = () => {
      
          setActiveFilButtons([]);
        
        }
      ;

      const filteredData = data.filter((item) => {
        // Проверяем, соответствует ли элемент тексту поиска
        const isMatchingSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
      
        // Проверяем, активны ли какие-либо фильтры
        const hasActiveFilters = activeFilButton.length > 0;
      
        if (hasActiveFilters) {
          // Если есть активные фильтры, то элемент должен соответствовать и им, и тексту поиска
          return (
            isMatchingSearch &&
            activeFilButton.includes(item.company)
            || activeFilButton.includes(item.category)
          );
        } else {
          // Если нет активных фильтров, элемент должен только соответствовать тексту поиска
          return isMatchingSearch;
        }
      });    const [selectedCard, setSelectedCard] = useState(null);


      const togglePopup = (index) => {
        setSelectedCard(index);
      };
    
      const closePopup = () => {
        setSelectedCard(null);
      };


      
    
    return (
        <div >

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

  <div className="actions-page" >
    
  <div className="popup-wrap" >
      <div className="popup-wrap__content">
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
      </div>
    </div>
    <div className="actions-head">
      <div className="actions-head__title">
        <img
          className="actions-head__logo"
          src={logo}
        />
        <h1 className="actions-head__caption"><Link to='admin/'>
          Актуальные промокоды скидки купоны акции 2023</Link>
        </h1>
      </div>
      <div className="actions-head__social">
        <span>Больше акций тут:</span>
        <div className="actions-footer-socials actions-footer-socials--head">
          <a
            className="actions-footer-socials__link"
            href="https://t.me/+i0Q1GHHKofUwYjhi"
            target="_blank"
            onclick="ym(93807298,'reachGoal','telegram');"
          >
           <img src={tg} width={20} height={20} alt="" />
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
          ref={menuRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
          data-disableiffit="true"
        >
        
            <div className="scrollyeah__shaft"
     >
          <div className="actions-stripe__item actions-stripe__item--filter">
            <button
              type="button"
              className="actions-stripe-button"
              data-toggle-popup="filters"
              onClick={toggleFilterPopup}
            >
              <div className="actions-stripe-button__icon">
              <img src={burger} width={24} height={24} alt="" />
              </div>
            </button>
          </div>
          <div class="actions-stripe__item">
                        <button name="brands[]" type="submit" value="42664"                 onClick={() =>handlePopFilterClick('СберМаркет')} 
            className={activeFilButton.includes("СберМаркет") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
>
                            <div class="actions-stripe-button__image" style={{backgroundImage: `url(${sm})`}}></div>
                            <span class="actions-stripe-button__amount">
                            {sberMarketCount}                        </span>
                        </button>
                    </div>
                    <div class="actions-stripe__item">
                        <button name="brands[]" type="submit" value="46512"onClick={() => handlePopFilterClick('ЛЭТУАЛЬ')} 
           className={activeFilButton.includes("ЛЭТУАЛЬ") ? "active-button actions-stripe-button" : "actions-stripe-button"} >

                            <div class="actions-stripe-button__image" style={{backgroundImage: "url(https://getblogger-messenger.storage.yandexcloud.net/ygbp_offer_logo_79e92ccf7a94a941624ebb0225378b28.jpg)"}}></div>
                            <span class="actions-stripe-button__amount">
                            {letualCount}                       </span>
                        </button>
                    </div>

          <div className="actions-stripe__item">
            <button
              name="categories[]"
              value={1}
              onClick={() => handlePopFilterClick('Онлайн-сервисы')}
            // className={activeButton === 'Онлайн-сервисы' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
            className={activeFilButton.includes("Онлайн-сервисы") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
            
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
              onClick={() => handlePopFilterClick('Финансовые продукты')}
              className={activeFilButton.includes("Финансовые продукты") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
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
              onClick={() => handlePopFilterClick('Еда и напитки')}
              
              className={activeFilButton.includes("Еда и напитки") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
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
              onClick={() => handlePopFilterClick('Маркетплейсы')} 
              className={activeFilButton.includes("Маркетплейсы") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
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
              onClick={() => handlePopFilterClick('Красота и здоровье')}
              className={activeFilButton.includes("Красота и здоровье") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
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
              onClick={() => handlePopFilterClick('Мода')} 
              className={activeFilButton.includes("Мода") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
              >
              <span className="actions-stripe-button__title">Мода </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              value={7}
              onClick={() => handlePopFilterClick('Путешествия')} 
              className={activeFilButton.includes("Путешествия") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
              >
              <span className="actions-stripe-button__title">Путешествия </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              onClick={() => handlePopFilterClick('Спорт')} 
              value={10}
              className={activeFilButton.includes("Спорт") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
              >
              <span className="actions-stripe-button__title">Спорт </span>
            </button>
          </div>
          <div className="actions-stripe__item">
            <button
              name="categories[]"
              type="submit"
              onClick={() => handlePopFilterClick('Дом и ремонт')} 
              value={11}
              className={activeFilButton.includes("Дом и ремонт") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
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
              onClick={() => handlePopFilterClick('Товары для животных')} 
              className={activeFilButton.includes("Товары для животных") ? "active-button actions-stripe-button" : "actions-stripe-button"} 
              >
              <span className="actions-stripe-button__title">
                Товары для животных{" "}
              </span>
            </button>
          </div>
          <div className="actions-stripe__item">
        <button
          name="categories[]"
          type="submit"
          onClick={handleSearchClick} // Добавляем обработчик для кнопки поиска
          value={13}
          className={activeButton === 'Поиск' ? 'active-button actions-stripe-button' : 'actions-stripe-button'}
        >
          <img className='loop' src={search} width={15} height={15} alt="" />
          {/* <span className="actions-stripe-button__title">Поиск</span> */}
        </button>
      </div>
      <div className="actions-stripe__item">
        <div className="search-input-container ">
          {isSearchActive && (
            <><input
                        type="text"
                        className="actions-search__input"

                        placeholder="Введите текст для поиска"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        /><button className='actions-search__button actions-search__button--close'  onClick={handleCloseClick} ><img width={15} height={15} src={close} alt="" /></button></>

          )}
        </div>
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
      {isFilterPopupOpen && (
        <div className="filters-popup">
       <div class="popup  action-popup__content actions-grid-item">
       <div class="popup-wrap__content">
           <div class="filters-popup" >
               <div class="filters-popup__head filters-popup-head">
                   <h3 class="filters-popup-head__title">Фильтры</h3>
                   <button class="filters-popup-head__close" type="button" onClick={toggleFilterPopup}>
                       <svg width="24" height="24">
                          <img src={close} alt="" />
                       </svg>
                   </button>
               </div>
               <div class="filters-popup__content">
                   
                   <div class="filters-popup-fields">
                       <h4 class="filters-popup-fields__title">Категории</h4>
                       <div class="filters-inputs" data-filter-inputs="">
                       <div className="filters-inputs__item">
        
          </div>      
                                                                                       
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              value={1}
              onClick={() => handlePopFilterClick('Онлайн-сервисы')}
            >
              <label 
          className={activeFilButton.includes("Онлайн-сервисы") ? "active" : "btnfilwht"}
            >
                Онлайн-сервисы{" "}
              </label>
            </div>
          </div>      
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              value={2}
              onClick={() => handlePopFilterClick('Финансовые продукты')}
              
              >
              <label           className={activeFilButton.includes("Финансовые продукты") ? "active" : "btnfilwht"}
>
                Финансовые продукты{" "}
              </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              value={3}
              onClick={() => handlePopFilterClick('Еда и напитки')}
              >
              <label  
className={activeFilButton.includes("Еда и напитки") ? "active" : "btnfilwht"}              >
                Еда и напитки{" "}
              </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              value={4}
              onClick={() => handlePopFilterClick('Маркетплейсы')} 
              >
              <label           className={activeFilButton.includes("Маркетплейсы") ? "active" : "btnfilwht"} 
>
                Маркетплейсы{" "}
              </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              value={5}
              onClick={() => handlePopFilterClick('Красота и здоровье')}
              >
              <label                className={activeFilButton.includes("Красота и здоровье") ? "active" : "btnfilwht"} 
>
                Красота и здоровье{" "}
              </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              value={6}
              onClick={() => handlePopFilterClick('Мода')} 
              >
              <label 
             className={activeFilButton.includes("Мода") ? "active" : "btnfilwht"} 
              
              >Мода </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              value={7}
              onClick={() => handlePopFilterClick('Путешествия')} 
              >
              <label 
             className={activeFilButton.includes("Путешествия") ? "active" : "btnfilwht"} 
              
              >Путешествия </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              onClick={() => handlePopFilterClick('Спорт')} 
              value={10}
              >
              <label              className={activeFilButton.includes("Спорт") ? "active" : "btnfilwht"} 
>Спорт </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              onClick={() =>handlePopFilterClick('Дом и ремонт')} 
              value={11}
              >
              <label             className={activeFilButton.includes("Дом и ремонт") ? "active" : "btnfilwht"} 
>
                Дом и ремонт{" "}
              </label>
            </div>
          </div>
          <div className="filters-inputs__item">
            <div
              name="categories[]"
              type="submit"
              value={12}
              onClick={() => handlePopFilterClick('Товары для животных')} 
              >
              <label  
className={activeFilButton.includes("Товары для животных") ? "active" : "btnfilwht"}               >
                Товары для животных{" "}
              </label>
            </div>
          </div>
          <div className="filters-inputs__item">
      
      </div>
                                                                                 
                           
                       </div>
                   </div>
                   
               </div>
               <div class="filters-popup__buttons">
                   <div class="filters-popup-buttons">
                       <div class="filters-popup-buttons__item">
                           <button onClick={handleAllFilterClick} class="filters-popup-buttons__button filbtn filters-popup-buttons__button--reset" id="reset_filter" type="reset">
                               Сбросить всё
                           </button>
                       </div>
                       <div class="filters-popup-buttons__item">
                           <button onClick={toggleFilterPopup} class="filters-popup-buttons__button filters-popup-buttons__button--submit" type="submit">
                               Применить
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   </div>
      )}
      
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

         ))}  
         
         
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
         ))} 
         </div></>
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
          <img src={usr} width={25} height={25} alt="" />

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
                href="https://t.me/blackfife"
                target="_blank"
                onclick="ym(93807298,'reachGoal','telegram');"
              >
                          <img src={tg} width={20} height={20} alt="" />

              </a>
            </div>
          </div>
        </div>
        </div>
    </footer>
    </div>
  <script src="../js/actions-promo.js@v=0.0.4"></script>
    </div>
  );
};

export default Main;