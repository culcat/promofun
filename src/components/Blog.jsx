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
import blog from "../types/deleteTypes";
import { Card, Button, Col } from 'react-bootstrap';
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








function Blog(){
    const [letualCount, setLetualCount] = useState(0);
    const [sberMarketCount, setSberMarketCount] = useState(0);
    const [isFilterOpen,setFilterOpen] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://45.155.207.232:12223/api/article/',  { httpsAgent: { rejectUnauthorized: false } })
            .then(response => {
                setData(response.data);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);




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




    // const togglePopup = (index) => {
    //     setSelectedCard(index);
    // };

    // const closePopup = () => {
    //     setSelectedCard(null);
    // };




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
                        <Link to="/">  <h1 className="actions-head__caption">
                            Актуальные промокоды скидки купоны акции 2023
                        </h1></Link>
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


                    <><div className="summary" /><div className="actions-grid">
                        {data.map((jsonData) => (

                            <div className="grid-item" key={jsonData.article_id}>
                                <div className="card">
                                    <div className="card-content">
                                        <h6 className="card-title">{jsonData.headers}</h6>
                                        <p className="card-text">{jsonData.text}</p>
                                        <button
                                            className="delete-button"
                                            onClick={() => handlePopFilterClick(jsonData.article_id)}
                                        >
                                            Прочитать
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))}



                    </div></>
                    {/*<Popup*/}
                    {/*    jsonData={filteredData[selectedCard]}*/}
                    {/*    isOpen={selectedCard !== null}*/}
                    {/*    onClose={closePopup}*/}
                    {/*/>*/}
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
        </div>
    );
};

export default Blog;