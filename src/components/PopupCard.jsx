import React, { useState } from 'react';

function PopupCard() {

  return (
    <div className=" popup-card">
      <button className='actions-grid-item__button' onClick={togglePopup}>Узнать больше</button>
      
    </div>
  );
}

export default PopupCard;
