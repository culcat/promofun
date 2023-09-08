import React, { useEffect, useState } from 'react';
import axios from 'axios';
function BankInfoComponent() {
  const [bankInfo, setBankInfo] = useState(null);

  useEffect(() => {
    // Создайте функцию для загрузки данных с сервера
    async function fetchBankInfo() {
      try {
        // Загрузите JSON-данные с сервера
        const response = await axios.get('../db.json');
        // Установите полученные данные в состояние
        setBankInfo(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }

    // Вызовите функцию загрузки данных при монтировании компонента
    fetchBankInfo();
  }, []);

  // Проверьте, загрузились ли данные, и выведите их
  if (bankInfo) {
    return (
      <div>
        <h1>{bankInfo.name}</h1>
        <p>{bankInfo.info}</p>
        {/* Вывод других данных из bankInfo */}
      </div>
    );
  } else {
    return <p>Загрузка данных...</p>;
  }
}

export default BankInfoComponent;
