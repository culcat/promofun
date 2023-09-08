import React, { useState } from 'react';
import '../styles/PopupCard.css';

function PopupCard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className=" popup-card">
      <button className='actions-grid-item__button' onClick={togglePopup}>Узнать больше</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
          <div class="summary"></div>
<div class="popup-wrap" data-popup="941992" data-ym-id="10269">
    <div class="popup-wrap__content">
        <div class="action-popup">
                        <div class="action-popup__content">
                <div class="actions-grid-item">
                                            <div class="actions-grid-item__image"
                            >
                                        <button onClick={togglePopup}>

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
                                    <h4 class="actions-grid-item__name">Яндекс 360</h4>
                                    <p class="actions-grid-item__category">Онлайн-сервисы</p>
                                </div>
                            </div>
                            <span class="actions-grid-item__deadline">До 2 октября                                    </span>
                        </div>

                        <p class="actions-grid-item__info actions-grid-item__info--bold actions-grid-item__info--popup">
                            Яндекс 360 — скидка до 70% на подписку для новых клиентов!                        </p>

                        <p class="actions-grid-item__details">
                            Реклама ООО «ЯНДЕКС»                                                            , ИНН 7736207543                                                        
                                                            erid: Kra23e4CT                                                    </p>

                        <p class="actions-grid-item__details">
                            Получи скидку до 70% на первую подписку Яндекс 360! 

Храните воспоминания с Яндекс 360  —  до 3ТБ на Диске, безлимит для фото и видео с телефона! Уникальное предложение на подписку Яндекс 360 доступно новым пользователям и пользователям с тарифом, в котором объём диска меньше, чем в приобретаемом. 

Возможности:
— До 3ТБ памяти на Диске
— безлимит на Диске для фото и видео с телефона 
— почта без рекламы и с возможностью создания красивого адреса
— и многое другое.
Только в сентябре скидка по промокоду на тарифы 200ГБ и 1 ТБ суммируется с акцией на сайте! Оформите подписку по мегавыгодной цене:
— 200ГБ за 119р вместо 199р при подписке на месяц
— 1ТБ за 239р вместо 399р при подписке на месяц
— 200ГБ за 384р вместо 1290р при подписке на год
— 1ТБ за 912р вместо 2290р при подписке на год                        </p>

                        
                                                    <div class="actions-grid-item__promo">
                                <div class="actions-grid-item-promo">
                                    <div class="actions-grid-item-promo__head">
                                        <strong class="actions-grid-item-promo__caption">Твой промокод</strong>
                                        <button class="actions-grid-item-promo__copy js-copy-promocode"
                                                data-clipboard-text="221778">
                                            <svg width="18" height="20">
                                                <use href="#icon-copy-promocode"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <strong class="actions-grid-item-promo__code">221778</strong>
                                </div>
                            </div>
                        
                        
                                                                                                                
                            <a class="actions-grid-item__button actions-grid-item__button--popup"
                               target="_blank"
                               href="https://gtblg.ru/ceXfYv?erid=Kra23e4CT">
                                Получить выгоду
                            </a>
                                            </div>
                </div>
            </div>
        </div>
    </div>
</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupCard;
