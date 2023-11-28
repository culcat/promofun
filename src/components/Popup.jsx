import close from "../images/cancel.png";
import copy from "../images/icons8-copy-32.png";
import React from "react";

export default function Popup({ jsonData, isOpen, onClose }) {
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