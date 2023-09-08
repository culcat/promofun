import React from 'react'
import PopupCard from './PopupCard'

const Card = () => {
  return (
    <>
        <div className="cactions-grid">
            <div className="actions-grid__col">
                <div className="actions-grid-item">
                    <div className="actions-grid-item__image" >
                    <div class="actions-grid-item__brand">
                    <div class="actions-grid-item__logo"></div>
                    <div class="actions-grid-item__brand-info">
                        <h4 class="actions-grid-item__name">Яндекс 360</h4>
                        <p class="actions-grid-item__category">Онлайн-сервисы</p>
                    </div>
                </div>
                    <p class="actions-grid-item__info">Яндекс 360 — скидка до 70% на подписку для новых клиентов!</p>
                    <PopupCard/>
                    </div>
                </div>
            </div>
        </div>
     </>
  )
}

export default Card