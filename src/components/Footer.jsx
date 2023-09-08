import React from 'react'

const Footer = () => {
  return (
    <>
         <footer class="actions-footer">
        <div class="actions-footer__row actions-footer__row--first">
            <div class="actions-footer-message">
                <div class="actions-footer-message__text actions-footer-message__text--left">
                    <p>А ещё есть акции?</p>
                </div>
                <div class="actions-footer-message__userpic">
                    <svg width="24" height="24">
                        <use href="#icon-user"></use>
                    </svg>
                </div>
            </div>
        </div>
                    <div class="actions-footer__row actions-footer__row--last">
                <div class="actions-footer-message">
                                            <div class="actions-footer-message__userpic"
                             ></div>
                                        <div class="actions-footer-message__text actions-footer-message__text--right">
                        <h4>Актуальные промокоды скидки купоны акции 2023</h4>
                        <p>Больше акций и предложений в моих соцсетях</p>
                        <div class="actions-footer-socials">
                                                            <a class="actions-footer-socials__link"
                                   href="https://t.me/Blackfive50"
                                   target="_blank"
                                   onClick="ym(93807298,'reachGoal','telegram');"
                                >
                                    <svg width="24" height="24">
                                        <use href="#icon-social-telegram"></use>
                                    </svg>
                                </a>
                                                    </div>
                    </div>
                </div>
            </div>
            </footer>
    </>
  )
}

export default Footer