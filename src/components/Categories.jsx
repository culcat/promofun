import React from 'react'
import { useState } from 'react';


const Categories = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className='popup-card'>
    <button onClick={togglePopup}>
        
    </button>
    {isPopupOpen && (
       <div class="actions-page" data-theme="light-02">
    <div class="popup-wrap" data-popup="filters">
        <div class="popup-wrap__content">
            <form class="filters-popup" action="" method="get">
                <div class="filters-popup__head filters-popup-head">
                    <h3 class="filters-popup-head__title">Фильтры</h3>
                    <button class="filters-popup-head__close" onClick={togglePopup} type="button" data-close-popup>
                        <svg width="24" height="24">
                            <use href="#icon-close"></use>
                        </svg>
                    </button>
                </div>
                <div class="filters-popup__content">
                    <div class="filters-popup-fields">
                        <h4 class="filters-popup-fields__title">Сортировка</h4>
                        <div class="filters-inputs" data-filter-inputs>
                            <div class="filters-inputs__item">
                                <input id="sort-popular" type="radio" name="sorting"
                                       value="popular" checked></input>
                                <label for="sort-popular">Сначала популярные</label>
                            </div>
                            <div class="filters-inputs__item">
                                <input id="sort-new" type="radio" name="sorting"
                                       value="new"></input>
                                <label for="sort-new">Сначала новые</label>
                            </div>
                        </div>
                    </div>
                    <div class="filters-popup-fields">
                        <h4 class="filters-popup-fields__title">Категории</h4>
                        <div class="filters-inputs" data-filter-inputs>
                            <div class="filters-inputs__item">
                                <input id="cat_all"
                                       type="checkbox"
                                       name="categories"
                                       value=""
                                     checked                                       data-select-all="all"></input>
                                <label for="cat_all">Все</label>
                            </div>

                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_1"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="1"></input>
                                    <label for="cat_1">Онлайн-сервисы</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_2"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="2"></input>
                                    <label for="cat_2">Финансовые продукты</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_3"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="3"></input>
                                    <label for="cat_3">Еда и напитки</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_4"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="4"></input>
                                    <label for="cat_4">Маркетплейсы</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_5"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="5"></input>
                                    <label for="cat_5">Красота и здоровье</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_6"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="6"></input>
                                    <label for="cat_6">Мода</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_7"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="7"></input>
                                    <label for="cat_7">Путешествия</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_10"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="10"></input>
                                    <label for="cat_10">Спорт</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_11"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="11"></input>
                                    <label for="cat_11">Дом и ремонт</label>
                                </div>
                                                                                            <div class="filters-inputs__item">
                                    <input id="cat_12"
                                           type="checkbox"
                                           name="categories[]"
                                                                                   value="12"></input>
                                    <label for="cat_12">Товары для животных</label>
                                </div>
                            
                        </div>
                    </div>
                    <div class="filters-popup-fields">
                        <h4 class="filters-popup-fields__title">Бренды</h4>
                        <div class="filters-inputs" data-filter-inputs>
                            <div class="filters-inputs__item">
                                <input id="brands_all"
                                       type="checkbox"
                                       name="brands"
                                       value=""
                                     checked                                       data-select-all="all"></input>
                                <label for="brands_all">Все</label>
                            </div>

                                                                                            <div class="filters-inputs__item">
                                    <input id="brands_42664" type="checkbox" name="brands[]"
                                                                                   value="42664"></input>
                                    <label for="brands_42664">СберМаркет</label>
                                </div>
                                                    </div>
                    </div>
                </div>
                <div class="filters-popup__buttons">
                    <div class="filters-popup-buttons">
                        <div class="filters-popup-buttons__item">
                            <button class="filters-popup-buttons__button filters-popup-buttons__button--reset"
                                    id="reset_filter"
                                    type="reset">
                                Сбросить всё
                            </button>
                        </div>
                        <div class="filters-popup-buttons__item">
                            <button class="filters-popup-buttons__button filters-popup-buttons__button--submit"
                                    type="submit">
                                Применить
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    </div>
     )}
    </div>
   
  )
}

export default Categories