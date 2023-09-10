import React, { useState } from 'react';
import '../styles/PopupCard.css';

import jsonData from '../db.json';

const Card = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="cactions-grid">
        <div className="actions-grid__col">
          <div className="actions-grid-item">
            <img className="actions-grid-item__image" src={jsonData.img} />

            <div className="actions-grid-item__brand">
              <img className="actions-grid-item__logo" src={jsonData.logo} />
              <div className="actions-grid-item__brand-info">
                <h4 className="actions-grid-item__name">{jsonData.company}</h4>
                <p className="actions-grid-item__category">{jsonData.category}</p>
              </div>
            </div>
            <p className="actions-grid-item__info">{jsonData.name}</p>
            <button className="actions-grid-item__button" onClick={togglePopup}>
              Узнать больше
            </button>

            {isPopupOpen && (
              <div className="popup">
                <div className="popup-content"><button onClick={togglePopup}>


                                                  <svg width="24" height="24">
                                    <use href="#icon-close"></use>
                                </svg>
                            </button>
                        </div>
                                        <div class="actions-grid-item__content">
                        <div class="actions-grid-item__main">
                            <div class="actions-grid-item__brand">
                                <div class="actions-grid-item__logo"></div>
                                <div class="actions-grid-item__brand-info">
                                    <h4 class="actions-grid-item__name">{jsonData.company}</h4>
                                    <p class="actions-grid-item__category">{jsonData.category}</p>
                                </div>
                            </div>
                            <span class="actions-grid-item__deadline">{jsonData.deadline}                                    </span>
                        </div>

                        <p class="actions-grid-item__info actions-grid-item__info--bold actions-grid-item__info--popup">
                        {jsonData.name}                        </p>

                        <p class="actions-grid-item__details">
                            {jsonData.info}                                                 </p>

                        <p class="actions-grid-item__details">
                           {jsonData.name}                 </p>

<div class="actions-grid-item__promo">
                                <div class="actions-grid-item-promo">
                                    <div class="actions-grid-item-promo__head">
                                        <strong class="actions-grid-item-promo__caption">Твой промокод</strong>
                                        <button class="actions-grid-item-promo__copy js-copy-promocode"
                                                data-clipboard-text={jsonData.promo}>
                                            <svg width="18" height="20">
                                                <use href="#icon-copy-promocode"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <strong class="actions-grid-item-promo__code">{jsonData.promo}</strong>
                                </div>
                            </div>
                        
                        
                                                                                                                
                            <a class="actions-grid-item__button actions-grid-item__button--popup"
                               target="_blank"
                               href={jsonData.url}>
                                Получить выгоду
                            </a>
                                            </div>
                </div>
          
            )}
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Card;